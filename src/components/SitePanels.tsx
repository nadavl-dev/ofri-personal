"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ACCENT_BLUE, PANEL_WIDTH } from "@/lib/constants";
import { PROJECTS } from "@/lib/projects";
import { usePanels } from "./PanelProvider";

const ABOUT_TEXT = [
  "Hi, I’m Ofri Azriel. I recently completed my second year of the Visual Communication program at Shenkar College.",
  "I’m passionate about typography, branding, packaging design, and print, with a strong interest in creating thoughtful visual systems that balance concept and craftsmanship. I enjoy exploring materials, experimenting with production techniques, and developing design solutions that are both visually refined and meaningful.",
  "I’m especially interested in tactile design and printed matter, and I enjoy creating work that people can experience not only visually, but also physically through materials, texture, and production.",
  "My work is driven by curiosity, attention to detail, and the belief that good design should communicate clearly while leaving a lasting impression. I’m always looking for opportunities to learn, collaborate, and continue growing as a designer.",
];

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

export function MenuPanel() {
  const { panel, closePanels } = usePanels();
  const portalTarget = usePortalTarget();
  const open = panel === "menu";

  if (!portalTarget) {
    return null;
  }

  return createPortal(
    <>
      <PanelOverlay open={open} onClose={closePanels} />
      <aside
        className="fixed top-0 z-50 h-[100dvh] overflow-y-auto bg-[#1c07fb] text-white transition-transform duration-300 ease-out"
        style={{
          width: PANEL_WIDTH,
          left: 0,
          transform: open ? "translateX(0)" : "translateX(-100%)",
        }}
        aria-hidden={!open}
      >
        <nav className="px-[30px] py-[36px]">
          {PROJECTS.map((project, index) => (
            <div key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                onClick={closePanels}
                className="-mx-[30px] block px-[30px] py-[18px] text-[20px] leading-normal text-white no-underline transition-colors hover:bg-white hover:text-[#1c07fb]"
              >
                <span className="font-semibold">{project.name}</span>
                <span>{` \\ `}</span>
                <span className="font-light">{project.subtitle}</span>
              </Link>
              {index < PROJECTS.length - 1 ? (
                <Image
                  src="/images/shared/menu-divider.svg"
                  alt=""
                  width={369}
                  height={1}
                  className="block w-full max-w-[309px]"
                />
              ) : null}
            </div>
          ))}
        </nav>
      </aside>
    </>,
    portalTarget,
  );
}

export function AboutPanel() {
  const { panel, closePanels } = usePanels();
  const portalTarget = usePortalTarget();
  const open = panel === "about";

  if (!portalTarget) {
    return null;
  }

  return createPortal(
    <>
      <PanelOverlay open={open} onClose={closePanels} />
      <aside
        className="fixed top-0 z-50 h-[100dvh] overflow-y-auto text-white transition-transform duration-300 ease-out"
        style={{
          width: PANEL_WIDTH,
          right: 0,
          backgroundColor: ACCENT_BLUE,
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
        aria-hidden={!open}
      >
        <div className="relative flex min-h-full flex-col px-[30px] pb-[26px] pt-[38px]">
          <div
            className="relative mb-[24px] w-[126px] overflow-hidden"
            style={{ aspectRatio: "126 / 166" }}
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

          <div className="space-y-4 text-[14px] font-medium leading-normal">
            {ABOUT_TEXT.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-[2px] pt-10 text-[14px] font-light underline">
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
        </div>
      </aside>
    </>,
    portalTarget,
  );
}
