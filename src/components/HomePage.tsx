"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ACCENT_BLUE, SITE_HEIGHT, SITE_WIDTH } from "@/lib/constants";
import { PROJECTS, type Project } from "@/lib/projects";
import { AboutPanel, MenuPanel } from "./SitePanels";
import { SiteFooter, SiteHeader } from "./SiteChrome";
import { SiteScale } from "./SiteScale";

const HOVER_LABEL_WIDTH = 358;

function getHoverLabelPosition(project: Project) {
  const centerX = project.thumbnail.left + project.thumbnail.width / 2;
  let left = centerX - HOVER_LABEL_WIDTH / 2;
  left = Math.max(24, Math.min(left, SITE_WIDTH - HOVER_LABEL_WIDTH - 24));
  const top = project.thumbnail.top + project.thumbnail.height + 12;
  return { left, top };
}

export function HomePage() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const hoveredProject = PROJECTS.find((p) => p.slug === hoveredSlug) ?? null;

  return (
    <SiteScale contentHeight={SITE_HEIGHT}>
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
            className="group absolute block overflow-hidden"
            style={{
              left: project.thumbnail.left,
              top: project.thumbnail.top,
              width: project.thumbnail.width,
              height: project.thumbnail.height,
            }}
            onMouseEnter={() => setHoveredSlug(project.slug)}
            onMouseLeave={() =>
              setHoveredSlug((current) =>
                current === project.slug ? null : current,
              )
            }
            onFocus={() => setHoveredSlug(project.slug)}
            onBlur={() =>
              setHoveredSlug((current) =>
                current === project.slug ? null : current,
              )
            }
            aria-label={`${project.name} — ${project.subtitle}`}
          >
            <div className="relative size-full overflow-hidden">
              <Image
                src={project.thumbnail.src}
                alt={`${project.name} project thumbnail`}
                fill
                className={project.thumbnail.imageClass ?? "object-cover"}
                sizes="93px"
              />
            </div>
          </Link>
        ))}

        {hoveredProject ? (
          <div
            className="pointer-events-none absolute z-30 text-[20px] leading-[1.15]"
            style={{
              ...getHoverLabelPosition(hoveredProject),
              width: HOVER_LABEL_WIDTH,
              color: ACCENT_BLUE,
            }}
          >
            <span className="font-semibold">{hoveredProject.name}</span>
            <span className="mx-2">\</span>
            <span className="font-light">{hoveredProject.subtitle}</span>
          </div>
        ) : null}

        <MenuPanel />
        <AboutPanel />
      </main>
    </SiteScale>
  );
}
