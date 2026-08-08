"use client";

import Image from "next/image";
import Link from "next/link";
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
        className="absolute left-[51px] top-[39px] h-[10px] w-[26.357px] cursor-pointer border-0 bg-transparent p-0"
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
          className="absolute left-[calc(50%-27px)] top-[45px] block h-[19px] w-[59px] text-[14px] font-medium leading-normal text-black"
        >
          Ofri Azriel
        </Link>
      ) : (
        <p className="absolute left-[calc(50%-27px)] top-[45px] h-[19px] w-[59px] text-[14px] font-medium leading-normal text-black">
          Ofri Azriel
        </p>
      )}

      <button
        type="button"
        onClick={toggleAbout}
        className="absolute left-[1449px] top-[44px] h-[17px] w-[36px] cursor-pointer border-0 bg-transparent p-0 text-left text-[14px] font-medium leading-normal text-black"
      >
        about
      </button>
    </>
  );
}

export function SiteFooter({
  emailLeft = 59,
  emailTop = 934,
  instagramLeft = 205,
  instagramTop = 934,
}: {
  emailLeft?: number;
  emailTop?: number;
  instagramLeft?: number;
  instagramTop?: number;
}) {
  return (
    <>
      <p
        className="absolute text-[14px] font-light leading-normal text-black"
        style={{ left: emailLeft, top: emailTop }}
      >
        ofri698@gmail.com
      </p>
      <p
        className="absolute text-[14px] font-light leading-normal text-black"
        style={{ left: instagramLeft, top: instagramTop }}
      >
        instagram
      </p>
    </>
  );
}
