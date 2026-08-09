"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { PANEL_WIDTH } from "@/lib/constants";

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

  return (
    <div
      className="min-h-[100dvh] transition-[padding] duration-300 ease-out"
      style={{
        paddingLeft: panel === "menu" ? PANEL_WIDTH : 0,
        paddingRight: panel === "about" ? PANEL_WIDTH : 0,
      }}
    >
      {children}
    </div>
  );
}
