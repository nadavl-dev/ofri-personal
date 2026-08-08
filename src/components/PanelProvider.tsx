"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

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
