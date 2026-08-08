"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE_HEIGHT, SITE_WIDTH } from "@/lib/constants";
import { PROJECTS } from "@/lib/projects";
import { AboutPanel, MenuPanel } from "./SitePanels";
import { SiteFooter, SiteHeader } from "./SiteChrome";
import { SiteScale } from "./SiteScale";

export function HomePage() {
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
            className="group absolute block hover:z-20"
            style={{
              left: project.thumbnail.left,
              top: project.thumbnail.top,
              width: project.thumbnail.width,
              height: project.thumbnail.height,
            }}
            aria-label={`${project.name} — ${project.subtitle}`}
          >
            <div className="relative size-full overflow-hidden transition-transform duration-300 ease-out group-hover:scale-[2.03]">
              <Image
                src={project.thumbnail.src}
                alt={`${project.name} project thumbnail`}
                fill
                className={project.thumbnail.imageClass ?? "object-cover"}
                sizes="200px"
              />
            </div>
          </Link>
        ))}

        <MenuPanel />
        <AboutPanel />
      </main>
    </SiteScale>
  );
}
