"use client";

import { SITE_WIDTH } from "@/lib/constants";
import { useEffect, useState, type ReactNode } from "react";

export function SiteScale({
  children,
  contentHeight,
}: {
  children: ReactNode;
  contentHeight: number;
}) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      setScale(Math.min(1, viewportWidth / SITE_WIDTH));
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

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
