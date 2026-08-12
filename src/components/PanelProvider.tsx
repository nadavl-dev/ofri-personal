"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { PANEL_WIDTH, SITE_HEIGHT } from "@/lib/constants";

/**
 * Panels are designed on a 350x982 canvas (like the Figma frame) and scaled
 * to the viewport height so their content always fits without scrolling.
 */
export function usePanelScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => setScale(window.innerHeight / SITE_HEIGHT);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return scale;
}

type Panel = "menu" | "about" | null;

type PanelContextValue = {
  panel: Panel;
  openMenu: () => void;
  openAbout: () => void;
  closePanels: () => void;
  toggleMenu: () => void;
  toggleAbout: () => void;
};

const PanelContext = createContext<PanelContextValue | null>(null);

export function PanelProvider({ children }: { children: ReactNode }) {
  const [panel, setPanel] = useState<Panel>(null);

  const openMenu = useCallback(() => setPanel("menu"), []);
  const openAbout = useCallback(() => setPanel("about"), []);
  const closePanels = useCallback(() => setPanel(null), []);
  const toggleMenu = useCallback(
    () => setPanel((current) => (current === "menu" ? null : "menu")),
    [],
  );
  const toggleAbout = useCallback(
    () => setPanel((current) => (current === "about" ? null : "about")),
    [],
  );

  const value = useMemo(
    () => ({
      panel,
      openMenu,
      openAbout,
      closePanels,
      toggleMenu,
      toggleAbout,
    }),
    [panel, openMenu, openAbout, closePanels, toggleMenu, toggleAbout],
  );

  return (
    <PanelContext.Provider value={value}>{children}</PanelContext.Provider>
  );
}

export function usePanels() {
  const context = useContext(PanelContext);
  if (!context) {
    throw new Error("usePanels must be used within PanelProvider");
  }
  return context;
}

export function PanelPushContainer({ children }: { children: ReactNode }) {
  const { panel } = usePanels();
  const scale = usePanelScale();
  const panelWidth = Math.round(PANEL_WIDTH * scale);

  return (
    <div
      className="min-h-[100dvh] transition-[padding] duration-300 ease-out"
      style={{
        paddingLeft: panel === "menu" ? panelWidth : 0,
        paddingRight: panel === "about" ? panelWidth : 0,
      }}
    >
      {children}
    </div>
  );
}
