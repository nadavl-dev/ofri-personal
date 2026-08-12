"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ACCENT_BLUE, PANEL_WIDTH, SITE_HEIGHT } from "@/lib/constants";
import { PROJECTS } from "@/lib/projects";
import { usePanels, usePanelScale } from "./PanelProvider";

const ABOUT_TEXT = [
  "Hi, I’m Ofri Azriel. I recently completed my second year of the Visual Communication program at Shenkar College.",
  "I’m passionate about typography, branding, packaging design, and print, with a strong interest in creating thoughtful visual systems that balance concept and craftsmanship. I enjoy exploring materials, experimenting with production techniques, and developing design solutions that are both visually refined and meaningful.",
  "I’m especially interested in tactile design and printed matter, and I enjoy creating work that people can experience not only visually, but also physically through materials, texture, and production.",
  "My work is driven by curiosity, attention to detail, and the belief that good design should communicate clearly while leaving a lasting impression. I’m always looking for opportunities to learn, collaborate, and continue growing as a designer.",
];

// Menu order and divider positions from the Figma homepage frame (52:649).
const MENU_ORDER = [
  "oxide",
  "who-am-i",
  "triz",
  "coral-atlas",
  "hitchcock",
  "crumples",
  "four-directions",
  "this-is-me",
  "trails",
  "bear-umbrella-loser",
  "dudu-tassa",
  "gus-van-sant",
];

const MENU_DIVIDERS = [91, 169, 247, 325, 403, 481, 559, 637, 716, 794, 872];

function usePortalTarget() {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setTarget(document.body);
  }, []);

  return target;
}

function PanelOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-40 bg-black/0 transition-opacity duration-300 ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={onClose}
      aria-hidden={!open}
    />
  );
}

/**
 * Renders panel content designed on the Figma 350x982 canvas, scaled to the
 * viewport height so everything always fits without scrolling.
 */
function PanelCanvas({
  scale,
  children,
}: {
  scale: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative origin-top-left"
      style={{
        width: PANEL_WIDTH,
        height: SITE_HEIGHT,
        transform: `scale(${scale})`,
      }}
    >
      {children}
    </div>
  );
}

export function MenuPanel() {
  const { panel, closePanels } = usePanels();
  const portalTarget = usePortalTarget();
  const scale = usePanelScale();
  const open = panel === "menu";

  if (!portalTarget) {
    return null;
  }

  const menuProjects = MENU_ORDER.map(
    (slug) => PROJECTS.find((project) => project.slug === slug)!,
  );

  return createPortal(
    <>
      <PanelOverlay open={open} onClose={closePanels} />
      <aside
        className="fixed top-0 z-50 h-[100dvh] overflow-hidden bg-[#1c07fb] text-white transition-transform duration-300 ease-out"
        style={{
          width: PANEL_WIDTH * scale,
          left: 0,
          transform: open ? "translateX(0)" : "translateX(-100%)",
        }}
        aria-hidden={!open}
      >
        <PanelCanvas scale={scale}>
          <nav>
            {menuProjects.map((project, index) => {
              const rowTop = index === 0 ? 0 : MENU_DIVIDERS[index - 1];
              const rowBottom =
                index < MENU_DIVIDERS.length
                  ? MENU_DIVIDERS[index]
                  : SITE_HEIGHT;

              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  onClick={closePanels}
                  className="absolute left-0 flex w-full items-center text-[20px] leading-normal text-white no-underline transition-colors hover:bg-white hover:text-[#1c07fb]"
                  style={{ top: rowTop, height: rowBottom - rowTop }}
                >
                  <span className="block w-[301px] pl-[26px]">
                    <span className="font-bold">{project.name}</span>
                    <span>{` \\ `}</span>
                    <span className="font-light">{project.subtitle}</span>
                  </span>
                </Link>
              );
            })}
            {MENU_DIVIDERS.map((top) => (
              <div
                key={top}
                className="pointer-events-none absolute left-0 h-px w-full bg-white"
                style={{ top }}
              />
            ))}
          </nav>
        </PanelCanvas>
      </aside>
    </>,
    portalTarget,
  );
}

export function AboutPanel() {
  const { panel, closePanels } = usePanels();
  const portalTarget = usePortalTarget();
  const scale = usePanelScale();
  const open = panel === "about";

  if (!portalTarget) {
    return null;
  }

  return createPortal(
    <>
      <PanelOverlay open={open} onClose={closePanels} />
      <aside
        className="fixed top-0 z-50 h-[100dvh] overflow-hidden text-white transition-transform duration-300 ease-out"
        style={{
          width: PANEL_WIDTH * scale,
          right: 0,
          backgroundColor: ACCENT_BLUE,
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
        aria-hidden={!open}
      >
        <PanelCanvas scale={scale}>
          <div
            className="absolute overflow-hidden"
            style={{ left: 30, top: 38, width: 190, height: 250 }}
          >
            <div className="absolute inset-0 -scale-x-100 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about/portrait.png"
                alt="Ofri Azriel"
                className="absolute max-w-none"
                style={{
                  height: "100%",
                  width: "197.62%",
                  left: "-44.07%",
                  top: 0,
                }}
              />
            </div>
          </div>

          <div
            className="absolute space-y-4 text-[14px] font-light leading-normal"
            style={{ left: 30, top: 316, width: 287 }}
          >
            {ABOUT_TEXT.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div
            className="absolute flex flex-col text-[14px] font-light leading-[18px]"
            style={{ left: 21, top: 919 }}
          >
            <button
              type="button"
              className="cursor-pointer border-0 bg-transparent p-0 text-left text-white underline"
            >
              cv
            </button>
            <button
              type="button"
              className="cursor-pointer border-0 bg-transparent p-0 text-left text-white underline"
            >
              Recommendations
            </button>
          </div>
        </PanelCanvas>
      </aside>
    </>,
    portalTarget,
  );
}
