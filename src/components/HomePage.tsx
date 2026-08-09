"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { SITE_HEIGHT, SITE_WIDTH } from "@/lib/constants";
import { PROJECTS } from "@/lib/projects";
import { usePanels } from "./PanelProvider";
import { AboutPanel, MenuPanel } from "./SitePanels";
import { SiteFooter, SiteHeader } from "./SiteChrome";
import { SiteScale } from "./SiteScale";

const SWIPE_THRESHOLD = 120;
const SWIPE_COOLDOWN_MS = 600;

function useHorizontalSwipePanels() {
  const { panel, openMenu, openAbout, closePanels } = usePanels();
  const accumulated = useRef(0);
  const lastTrigger = useRef(0);
  const panelRef = useRef(panel);
  panelRef.current = panel;

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      // Only react to predominantly horizontal scrolling
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) {
        return;
      }

      event.preventDefault();

      const now = Date.now();
      if (now - lastTrigger.current < SWIPE_COOLDOWN_MS) {
        return;
      }

      // Reset accumulation when direction flips
      if (Math.sign(event.deltaX) !== Math.sign(accumulated.current)) {
        accumulated.current = 0;
      }
      accumulated.current += event.deltaX;

      if (Math.abs(accumulated.current) < SWIPE_THRESHOLD) {
        return;
      }

      const scrollingRight = accumulated.current > 0;
      accumulated.current = 0;
      lastTrigger.current = now;

      const current = panelRef.current;
      if (scrollingRight) {
        if (current === "menu") {
          closePanels();
        } else {
          openAbout();
        }
      } else {
        if (current === "about") {
          closePanels();
        } else {
          openMenu();
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [openMenu, openAbout, closePanels]);
}

export function HomePage() {
  useHorizontalSwipePanels();

  return (
    <SiteScale contentHeight={SITE_HEIGHT} fitToViewport>
      <main
        className="relative bg-white"
        style={{ width: SITE_WIDTH, height: SITE_HEIGHT }}
      >
        <SiteHeader />
        <SiteFooter />

        {PROJECTS.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group absolute block hover:z-30"
            style={{
              left: project.thumbnail.left,
              top: project.thumbnail.top,
              width: project.thumbnail.width,
              height: project.thumbnail.height,
            }}
            aria-label={`${project.name} — ${project.subtitle}`}
          >
            <div
              className="relative size-full origin-center overflow-visible transition-transform duration-300 ease-out group-hover:scale-[2.034]"
              style={{ transformOrigin: "center center" }}
            >
              <div className="relative size-full overflow-hidden">
                <Image
                  src={project.thumbnail.src}
                  alt={`${project.name} project thumbnail`}
                  fill
                  className={`${project.thumbnail.imageClass ?? "object-cover"} transition-opacity duration-200 group-hover:opacity-0`}
                  sizes="93px"
                  quality={100}
                  unoptimized
                />
                <Image
                  src={project.thumbnail.hoverSrc}
                  alt=""
                  fill
                  className="object-cover opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  sizes="189px"
                  quality={100}
                  unoptimized
                />
              </div>
            </div>
          </Link>
        ))}

        <MenuPanel />
        <AboutPanel />
      </main>
    </SiteScale>
  );
}
