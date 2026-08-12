"use client";

import Image from "next/image";
import Link from "next/link";
import { EMAIL, INSTAGRAM_LABEL, INSTAGRAM_URL } from "@/lib/constants";
import { usePanels } from "./PanelProvider";

export function SiteHeader({
  centerLink = true,
}: {
  centerLink?: boolean;
}) {
  const { toggleMenu, toggleAbout } = usePanels();

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        onClick={toggleMenu}
        className="absolute left-[30px] top-[39px] h-[10px] w-[26.357px] cursor-pointer border-0 bg-transparent p-0"
      >
        <Image
          src="/images/shared/hamburger.svg"
          alt=""
          width={26}
          height={10}
          className="size-full"
        />
      </button>

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

      <button
        type="button"
        onClick={toggleAbout}
        className="absolute right-[30px] top-[44px] h-[17px] w-[36px] cursor-pointer border-0 bg-transparent p-0 text-right text-[14px] font-light leading-normal text-black"
      >
        about
      </button>
    </>
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
