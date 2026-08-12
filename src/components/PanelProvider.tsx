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

  // Slide the whole page aside (no resizing/reflow) so content keeps its
  // scale while a panel is open, exactly like the Figma prototype.
  const shift =
    panel === "menu" ? panelWidth : panel === "about" ? -panelWidth : 0;

  return (
    <div className="overflow-x-clip">
      <div
        className="min-h-[100dvh] transition-transform duration-300 ease-out"
        style={{ transform: `translateX(${shift}px)` }}
      >
        {children}
      </div>
    </div>
  );
}
