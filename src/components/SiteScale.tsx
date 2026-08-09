"use client";

import { SITE_WIDTH } from "@/lib/constants";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function SiteScale({
  children,
  contentHeight,
  fitToViewport = false,
}: {
  children: ReactNode;
  contentHeight: number;
  fitToViewport?: boolean;
}) {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const element = outerRef.current;
    if (!element) return;

    const updateScale = () => {
      const containerWidth = element.clientWidth || window.innerWidth;
      if (fitToViewport) {
        const viewportHeight = window.innerHeight;
        setScale(
          Math.min(
            containerWidth / SITE_WIDTH,
            viewportHeight / contentHeight,
          ),
        );
      } else {
        setScale(Math.min(1, containerWidth / SITE_WIDTH));
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(element);
    window.addEventListener("resize", updateScale);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, [fitToViewport, contentHeight]);

  if (fitToViewport) {
    return (
      <div
        ref={outerRef}
        className="flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-white"
      >
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
    <div
      ref={outerRef}
      className="flex w-full justify-center overflow-x-hidden bg-white"
    >
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
