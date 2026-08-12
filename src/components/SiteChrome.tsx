"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  EMAIL,
  INSTAGRAM_LABEL,
  INSTAGRAM_URL,
  PANEL_WIDTH,
} from "@/lib/constants";
import { usePanels, usePanelScale } from "./PanelProvider";

/**
 * Hamburger + about are rendered in a viewport-fixed overlay (outside the
 * scaled site canvas) so they hug the real screen edges, and they slide with
 * the page when a panel opens.
 */
function HeaderEdgeButtons() {
  const { panel, toggleMenu, toggleAbout } = usePanels();
  const scale = usePanelScale();
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setTarget(document.body);
  }, []);

  if (!target) {
    return null;
  }

  const panelWidth = Math.round(PANEL_WIDTH * scale);
  const shift =
    panel === "menu" ? panelWidth : panel === "about" ? -panelWidth : 0;

  return createPortal(
    <>
      <button
        type="button"
        aria-label="Open menu"
        onClick={toggleMenu}
        className="fixed z-30 cursor-pointer border-0 bg-transparent p-0 transition-transform duration-300 ease-out"
        style={{
          left: 30,
          top: 39 * scale,
          width: 26.357 * scale,
          height: 10 * scale,
          transform: `translateX(${shift}px)`,
        }}
      >
        <Image
          src="/images/shared/hamburger.svg"
          alt=""
          width={26}
          height={10}
          className="size-full"
        />
      </button>

      <button
        type="button"
        onClick={toggleAbout}
        className="fixed z-30 cursor-pointer border-0 bg-transparent p-0 text-right font-light leading-normal text-black transition-transform duration-300 ease-out"
        style={{
          right: 30,
          top: 44 * scale,
          fontSize: 14 * scale,
          transform: `translateX(${shift}px)`,
        }}
      >
        about
      </button>
    </>,
    target,
  );
}

export function SiteHeader({
  centerLink = true,
}: {
  centerLink?: boolean;
}) {
  return (
    <>
      <HeaderEdgeButtons />

      {centerLink ? (
        <Link
          href="/"
          className="absolute left-[calc(50%-44px)] top-[45px] block h-[19px] w-[84px] text-[14px] font-medium uppercase leading-normal text-black"
        >
          Ofri Azriel
        </Link>
      ) : (
        <p className="absolute left-[calc(50%-44px)] top-[45px] h-[19px] w-[84px] text-[14px] font-medium uppercase leading-normal text-black">
          Ofri Azriel
        </p>
      )}
    </>
  );
}

/**
 * Homepage footer pinned to the real viewport edge (like the header edge
 * buttons), so it aligns with the hamburger instead of the centered canvas.
 */
export function ViewportFooter() {
  const { panel } = usePanels();
  const scale = usePanelScale();
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setTarget(document.body);
  }, []);

  if (!target) {
    return null;
  }

  const panelWidth = Math.round(PANEL_WIDTH * scale);
  const shift =
    panel === "menu" ? panelWidth : panel === "about" ? -panelWidth : 0;

  return createPortal(
    <div
      className="fixed z-30 transition-transform duration-300 ease-out"
      style={{
        left: 36,
        top: 934 * scale,
        fontSize: 14 * scale,
        transform: `translateX(${shift}px)`,
      }}
    >
      <a
        href={`mailto:${EMAIL}`}
        className="font-light leading-[18px] text-black no-underline hover:opacity-80"
      >
        {EMAIL}
      </a>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-0 whitespace-nowrap font-light leading-[18px] text-black no-underline hover:opacity-80"
        style={{ left: 155 * scale }}
      >
        {INSTAGRAM_LABEL}
      </a>
    </div>,
    target,
  );
}

export function SiteFooter({
  emailLeft = 57,
  emailTop = 934,
  instagramLeft = 212,
}: {
  emailLeft?: number;
  emailTop?: number;
  instagramLeft?: number;
  instagramTop?: number;
}) {
  return (
    <div
      className="absolute"
      style={{ left: emailLeft, top: emailTop }}
    >
      <a
        href={`mailto:${EMAIL}`}
        className="text-[14px] font-light leading-[18px] text-black no-underline hover:opacity-80"
      >
        {EMAIL}
      </a>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-0 whitespace-nowrap text-[14px] font-light leading-[18px] text-black no-underline hover:opacity-80"
        style={{ left: instagramLeft - emailLeft }}
      >
        {INSTAGRAM_LABEL}
      </a>
    </div>
  );
}
