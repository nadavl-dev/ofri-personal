"use client";

import { SITE_WIDTH } from "@/lib/constants";
import { useEffect, useState, type ReactNode } from "react";

export function SiteScale({
  children,
  contentHeight,
  fitToViewport = false,
}: {
  children: ReactNode;
  contentHeight: number;
  fitToViewport?: boolean;
}) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      if (fitToViewport) {
        const viewportHeight = window.innerHeight;
        setScale(
          Math.min(
            viewportWidth / SITE_WIDTH,
            viewportHeight / contentHeight,
          ),
        );
      } else {
        setScale(Math.min(1, viewportWidth / SITE_WIDTH));
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [fitToViewport, contentHeight]);

  if (fitToViewport) {
    return (
      <div className="flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-white">
        <div
          style={{
            width: SITE_WIDTH * scale,
            height: contentHeight * scale,
          }}
        >
          <div
            style={{
              width: SITE_WIDTH,
              height: contentHeight,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-center overflow-x-hidden bg-white">
      <div
        style={{
          width: SITE_WIDTH * scale,
          height: contentHeight * scale,
        }}
      >
        <div
          style={{
            width: SITE_WIDTH,
            height: contentHeight,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
