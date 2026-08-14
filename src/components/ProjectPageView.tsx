"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { SITE_WIDTH } from "@/lib/constants";
import type { ProjectPageData } from "@/lib/projectPages";
import { AboutPanel, MenuPanel } from "./SitePanels";
import { SiteFooter, SiteHeader } from "./SiteChrome";
import { SiteScale } from "./SiteScale";

/**
 * Main project video: autoplays muted (browser requirement), then unmutes on
 * the user's first interaction with the page. Clicking the video toggles
 * sound afterwards.
 */
function SoundVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const unlocked = useRef(false);

  useEffect(() => {
    const unmute = () => {
      const video = videoRef.current;
      if (!video || unlocked.current) return;
      unlocked.current = true;
      video.muted = false;
      video.play().catch(() => {
        // If unmuted playback is rejected, fall back to muted playback.
        video.muted = true;
        video.play().catch(() => {});
      });
    };

    window.addEventListener("pointerdown", unmute, { once: true });
    window.addEventListener("keydown", unmute, { once: true });
    return () => {
      window.removeEventListener("pointerdown", unmute);
      window.removeEventListener("keydown", unmute);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      className="size-full cursor-pointer object-cover"
      onClick={() => {
        const video = videoRef.current;
        if (!video) return;
        unlocked.current = true;
        video.muted = !video.muted;
      }}
    />
  );
}

export function ProjectPageView({ page }: { page: ProjectPageData }) {
  return (
    <SiteScale contentHeight={page.pageHeight} matchHomepageScale>
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

        {page.images.map((image) => (
          <div
            key={image.src}
            className="absolute z-0 overflow-hidden"
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
            {image.src.endsWith(".mp4") && image.sound ? (
              <SoundVideo src={image.src} />
            ) : image.src.endsWith(".mp4") ? (
              <video
                src={image.src}
                autoPlay
                muted
                loop
                playsInline
                className={`size-full ${image.imageClass ?? "object-cover"}`}
              />
            ) : image.animated || image.src.endsWith(".gif") ? (
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
            className={`absolute z-0 overflow-hidden ${placeholder.src ? "" : "bg-neutral-100"}`}
            style={{
              left: placeholder.left,
              top: placeholder.top,
              width: placeholder.width,
              height: placeholder.height,
            }}
          >
            {placeholder.src ? <SoundVideo src={placeholder.src} /> : null}
          </div>
        ))}

        {page.heroHover ? (
          <div
            className="group absolute z-10"
            style={{
              left: page.heroHover.trigger.left,
              top: page.heroHover.trigger.top,
              width: page.heroHover.trigger.width,
              height: page.heroHover.trigger.height,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={page.heroHover.overlay.src}
              alt=""
              className="pointer-events-none absolute max-w-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                left: page.heroHover.overlay.left - page.heroHover.trigger.left,
                top: page.heroHover.overlay.top - page.heroHover.trigger.top,
                width: page.heroHover.overlay.width,
                height: page.heroHover.overlay.height,
              }}
            />
          </div>
        ) : null}

        <div
          className="absolute z-20 inline-flex items-center justify-center whitespace-nowrap bg-[#1c07fb] px-[15px]"
          style={{
            left: page.badge.left,
            top: page.badge.top,
            minWidth: page.badge.width,
            height: page.badge.height,
          }}
        >
          <p className="text-[20px] font-bold leading-normal text-white">
            {page.badge.text}
          </p>
        </div>

        <div
          className="absolute z-10 bg-white whitespace-pre-line text-[20px] font-light leading-[24px] text-black"
          style={{
            left: page.description.left,
            top: page.description.top,
            width: page.description.width,
          }}
        >
          {page.description.text}
        </div>

        <MenuPanel />
        <AboutPanel />
      </main>
    </SiteScale>
  );
}
