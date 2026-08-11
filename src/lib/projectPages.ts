import pagesJson from "../../docs/figma-project-pages-summary.json";

export type ProjectImage = {
  src: string;
  left: number;
  top: number;
  width: number;
  height: number;
  rotation?: number;
  objectFit?: "cover" | "contain";
  imageClass?: string;
  animated?: boolean;
};

export type ProjectPageData = {
  slug: string;
  name: string;
  pageHeight: number;
  badge: {
    text: string;
    left: number;
    top: number;
    width: number;
    height: number;
    textLeft: number;
    textTop: number;
  };
  description: {
    left: number;
    top: number;
    width: number;
    height: number;
    text: string;
  };
  images: ProjectImage[];
  videoPlaceholders?: Array<{
    left: number;
    top: number;
    width: number;
    height: number;
    src?: string;
  }>;
  footer: {
    email: { left: number; top: number; text: string };
    instagram: { left: number; top: number; text: string };
  };
};

const oxidePage: ProjectPageData = {
  slug: "oxide",
  name: "Oxide",
  pageHeight: 1586,
  badge: {
    text: "Oxide",
    left: 826,
    top: 220,
    width: 78,
    height: 35,
    textLeft: 841,
    textTop: 225,
  },
  description: {
    left: 826,
    top: 277,
    width: 426,
    height: 272,
    text: "The project began with an exploration of visual noise through scanning and analog experiments. This process gradually evolved into experiments with iron and rust, where oxidation itself became a tool for creating imagery. The resulting textures formed the basis of the exhibition’s visual identity, developed across a series of posters and moving images. The project combines physical processes with digital design, allowing material, time, and chance to become part of the design process.",
  },
  images: [
    {
      src: "/images/projects/oxide/video.png",
      left: 147,
      top: 220,
      width: 597,
      height: 454,
      objectFit: "cover",
    },
    {
      src: "/images/projects/oxide/cube.png",
      left: 147,
      top: 794,
      width: 373,
      height: 523,
      objectFit: "cover",
    },
    {
      src: "/images/projects/oxide/cone.png",
      left: 568,
      top: 794,
      width: 373,
      height: 523,
      objectFit: "cover",
    },
    {
      src: "/images/projects/oxide/sphere.png",
      left: 989,
      top: 794,
      width: 374,
      height: 523,
      objectFit: "cover",
    },
  ],
  footer: {
    email: { left: 69, top: 1472, text: "ofri698@gmail.com" },
    instagram: { left: 215, top: 1472, text: "instagram" },
  },
};

const trizPage: ProjectPageData = {
  slug: "triz",
  name: "TRIZ",
  pageHeight: 3176,
  badge: {
    text: "TRIZ",
    left: 835,
    top: 220,
    width: 70,
    height: 35,
    textLeft: 850,
    textTop: 225,
  },
  description: {
    left: 835,
    top: 277,
    width: 426,
    height: 224,
    text: "TRIZ is a packaging collection for tahini products, exploring the relationship between an object and the space around it. Just as tahini is considered an addition to a dish, yet often completes it, the project focuses on negative space as an active part of the design. Each package is completed by the element placed in front of it, creating the negative space that defines its form and visual identity.",
  },
  images: [
    {
      src: "/images/projects/triz/triz18.png",
      left: 157,
      top: 220,
      width: 572,
      height: 857,
      objectFit: "cover",
    },
    {
      src: "/images/projects/triz/triz17.png",
      left: 764,
      top: 695,
      width: 575,
      height: 383,
      objectFit: "cover",
    },
    {
      src: "/images/projects/triz/triz1.png",
      left: 157,
      top: 1117,
      width: 270,
      height: 181,
      objectFit: "cover",
    },
    {
      src: "/images/projects/triz/triz11.png",
      left: 460,
      top: 1118,
      width: 269,
      height: 180,
      objectFit: "cover",
    },
    {
      src: "/images/projects/triz/triz6.png",
      left: 764,
      top: 1118,
      width: 270,
      height: 180,
      objectFit: "cover",
    },
    {
      src: "/images/projects/triz/img8432.png",
      left: 1066,
      top: 1115,
      width: 273,
      height: 183,
      objectFit: "cover",
    },
    {
      src: "/images/projects/triz/triz4.png",
      left: 157,
      top: 1334,
      width: 270,
      height: 181,
      objectFit: "cover",
    },
    {
      src: "/images/projects/triz/triz16.png",
      left: 459,
      top: 1334,
      width: 270,
      height: 180,
      objectFit: "cover",
    },
    {
      src: "/images/projects/triz/triz14.png",
      left: 764,
      top: 1335,
      width: 270,
      height: 181,
      objectFit: "cover",
    },
    {
      src: "/images/projects/triz/triz9.png",
      left: 1069,
      top: 1334,
      width: 270,
      height: 181,
      objectFit: "cover",
    },
    {
      src: "/images/projects/triz/triz20.png",
      left: 157,
      top: 1552,
      width: 1182,
      height: 788,
      objectFit: "cover",
    },
    {
      src: "/images/projects/triz/triz19.png",
      left: 559,
      top: 2378,
      width: 780,
      height: 520,
      objectFit: "cover",
    },
  ],
  footer: {
    email: { left: 71, top: 3062, text: "ofri698@gmail.com" },
    instagram: { left: 217, top: 3062, text: "instagram" },
  },
};

const coralAtlasPage: ProjectPageData = {
  slug: "coral-atlas",
  name: "Coral Atlas",
  pageHeight: 2251,
  badge: {
    text: "Coral Atlas",
    left: 982,
    top: 269,
    width: 125,
    height: 35,
    textLeft: 997,
    textTop: 274,
  },
  description: {
    left: 982,
    top: 322,
    width: 426,
    height: 297,
    text: "A coral field guide designed around movement and constant change. Rather than relying on dramatic transformations, the book evolves through small shifts in composition. While the structure remains consistent, the elements move from spread to spread, allowing each page to become part of the next. The result is a continuous visual rhythm that encourages the reader to slow down, notice subtle changes, and experience the book as an ongoing sequence rather than a series of separate pages.",
  },
  images: [
    {
      src: "/images/projects/coral-atlas/corals10.png",
      left: 91,
      top: 261,
      width: 827,
      height: 551,
      objectFit: "cover",
    },
    {
      src: "/images/projects/coral-atlas/corals2.png",
      left: 91,
      top: 869,
      width: 827,
      height: 550,
      objectFit: "cover",
    },
    {
      src: "/images/projects/coral-atlas/corals1.png",
      left: 660,
      top: 1501,
      width: 330,
      height: 220,
      objectFit: "cover",
    },
    {
      src: "/images/projects/coral-atlas/corals8.png",
      left: 1045,
      top: 1501,
      width: 329,
      height: 220,
      objectFit: "cover",
    },
    {
      src: "/images/projects/coral-atlas/corals5.png",
      left: 659,
      top: 1779,
      width: 330,
      height: 220,
      objectFit: "cover",
    },
    {
      src: "/images/projects/coral-atlas/corals3.png",
      left: 1045,
      top: 1779,
      width: 329,
      height: 219,
      objectFit: "cover",
    },
    {
      src: "/images/projects/coral-atlas/hero.mp4",
      left: 91,
      top: 1495,
      width: 504,
      height: 504,
      objectFit: "cover",
    },
  ],
  footer: {
    email: { left: 69, top: 2138, text: "ofri698@gmail.com" },
    instagram: { left: 215, top: 2138, text: "instagram" },
  },
};

function mapJsonPage(page: (typeof pagesJson.pages)[number]): ProjectPageData {
  return {
    slug: page.slug,
    name: page.name,
    pageHeight: page.pageHeight,
    badge: page.badge,
    description: page.description,
    images: page.images
      .filter(
        (image): image is typeof image & {
          left: number;
          top: number;
          width: number;
          height: number;
        } =>
          typeof image.left === "number" &&
          typeof image.top === "number" &&
          typeof image.width === "number" &&
          typeof image.height === "number",
      )
      .map((image, index) => {
        const baseName = `${index + 1}-${image.name.replace(/[^\w.-]+/g, "-").slice(0, 40)}`;
        const isAnimated =
          index === 0 &&
          ["crumples", "dudu-tassa", "gus-van-sant"].includes(page.slug);
        const extension = image.url.includes(".svg")
          ? "svg"
          : isAnimated
            ? "mp4"
            : "png";

        return {
          src: `/images/projects/${page.slug}/${baseName}.${extension}`,
          left: image.left,
          top: image.top,
          width: image.width,
          height: image.height,
          rotation: "rotation" in image ? image.rotation : undefined,
          objectFit: "cover" as const,
          animated: isAnimated,
        };
      }),
    videoPlaceholders: page.videoPlaceholders?.map((placeholder) => ({
      left: placeholder.left,
      top: placeholder.top,
      width: placeholder.width,
      height: placeholder.height,
      src: "src" in placeholder ? (placeholder as { src?: string }).src : undefined,
    })),
    footer: {
      email: {
        left: page.footer.email.left,
        top: page.footer.email.top,
        text: page.footer.email.text,
      },
      instagram: {
        left: page.footer.instagram.left,
        top: page.footer.instagram.top,
        text: page.footer.instagram.text,
      },
    },
  };
}

export const PROJECT_PAGES: ProjectPageData[] = [
  oxidePage,
  mapJsonPage(pagesJson.pages.find((page) => page.slug === "who-am-i")!),
  trizPage,
  coralAtlasPage,
  ...pagesJson.pages
    .filter(
      (page) =>
        !["who-am-i", "oxide", "triz", "coral-atlas", "this-is-me"].includes(
          page.slug,
        ),
    )
    .map(mapJsonPage),
  {
    ...mapJsonPage(pagesJson.pages.find((page) => page.slug === "this-is-me")!),
    pageHeight: 1820,
    badge: {
      text: "Zot Ani \\ This Is Me",
      left: 784,
      top: 224,
      width: 188,
      height: 35,
      textLeft: 799,
      textTop: 229,
    },
    description: {
      left: 784,
      top: 224,
      width: 426,
      height: 242,
      text: "\n\nA hand-drawn animation based on my everyday life. A collection of small moments, routines, and habits that come together to tell a little about me and my world. Created frame by frame, the project explores movement, rhythm, and the transition from static illustration to animation.",
    },
    images: [
      {
        src: "/images/projects/this-is-me/1-IMG_1214-1.png",
        left: 132,
        top: 150,
        width: 595,
        height: 466,
        objectFit: "cover",
      },
      {
        src: "/images/projects/this-is-me/2-IMG_1211-1.png",
        left: 220,
        top: 1407,
        width: 315,
        height: 294,
        objectFit: "cover",
      },
      {
        src: "/images/projects/this-is-me/3-IMG_1212-2-1.png",
        left: 542,
        top: 1373.5,
        width: 428.5,
        height: 364.15,
        objectFit: "contain",
      },
      {
        src: "/images/projects/this-is-me/4-IMG_1216-1.png",
        left: 949,
        top: 1380,
        width: 415,
        height: 379,
        objectFit: "cover",
      },
    ],
    videoPlaceholders: [
      {
        left: 132,
        top: 557,
        width: 1280,
        height: 720,
        src: "/images/projects/this-is-me/zot-ani.mp4",
      },
    ],
  },
];

export function getProjectPageBySlug(slug: string) {
  return PROJECT_PAGES.find((page) => page.slug === slug);
}
