"use client";

import Image from "next/image";
import { SITE_WIDTH } from "@/lib/constants";
import type { ProjectPageData } from "@/lib/projectPages";
import { AboutPanel, MenuPanel } from "./SitePanels";
import { SiteFooter, SiteHeader } from "./SiteChrome";
import { SiteScale } from "./SiteScale";

export function ProjectPageView({ page }: { page: ProjectPageData }) {
  return (
    <SiteScale contentHeight={page.pageHeight}>
      <main
        className="relative bg-white"
        style={{ width: SITE_WIDTH, height: page.pageHeight }}
      >
        <SiteHeader />
        <SiteFooter
          emailLeft={page.footer.email.left}
          emailTop={page.footer.email.top}
          instagramLeft={page.footer.instagram.left}
          instagramTop={page.footer.instagram.top}
        />

        <div
          className="absolute bg-[#1c07fb]"
          style={{
            left: page.badge.left,
            top: page.badge.top,
            width: page.badge.width,
            height: page.badge.height,
          }}
        />
        <p
          className="absolute text-[20px] font-medium leading-normal text-white"
          style={{
            left: page.badge.textLeft,
            top: page.badge.textTop,
          }}
        >
          {page.badge.text}
        </p>

        <div
          className="absolute whitespace-pre-line text-[20px] font-light leading-normal text-black"
          style={{
            left: page.description.left,
            top: page.description.top,
            width: page.description.width,
          }}
        >
          {page.description.text}
        </div>

        {page.images.map((image) => (
          <div
            key={image.src}
            className="absolute overflow-hidden"
            style={{
              left: image.left,
              top: image.top,
              width: image.width,
              height: image.height,
              transform: image.rotation
                ? `rotate(${image.rotation}deg)`
                : undefined,
            }}
          >
            {image.animated || image.src.endsWith(".gif") ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image.src}
                alt=""
                className={`size-full ${image.imageClass ?? "object-cover"}`}
              />
            ) : (
              <Image
                src={image.src}
                alt=""
                fill
                className={image.imageClass ?? "object-cover"}
                sizes={`${Math.round(image.width)}px`}
              />
            )}
          </div>
        ))}

        {page.videoPlaceholders?.map((placeholder, index) => (
          <div
            key={`video-${index}`}
            className="absolute bg-neutral-100"
            style={{
              left: placeholder.left,
              top: placeholder.top,
              width: placeholder.width,
              height: placeholder.height,
            }}
          />
        ))}

        <MenuPanel />
        <AboutPanel />
      </main>
    </SiteScale>
  );
}
