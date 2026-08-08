export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  frameId: string;
  thumbnail: {
    src: string;
    hoverSrc: string;
    left: number;
    top: number;
    width: number;
    height: number;
    imageClass?: string;
    hoverImageClass?: string;
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "coral-atlas",
    name: "Coral Atlas",
    subtitle: "Editorial & Typographic Design",
    frameId: "58:709",
    thumbnail: {
      src: "/images/home/coral-atlas.png",
      hoverSrc: "/images/hover/coral-atlas.png",
      left: 51,
      top: 81,
      width: 93,
      height: 123,
      imageClass:
        "absolute h-[113.82%] left-[-0.1%] max-w-none top-0 w-[100.2%]",
    },
  },
  {
    slug: "who-am-i",
    name: "Who Am I",
    subtitle: "AI Generated Identity Project",
    frameId: "85:1412",
    thumbnail: {
      src: "/images/home/who-am-i.png",
      hoverSrc: "/images/hover/who-am-i.png",
      left: 172,
      top: 83,
      width: 93,
      height: 123,
      imageClass:
        "absolute h-[164.07%] left-[-36.19%] max-w-none top-[-31.39%] w-[173.6%]",
    },
  },
  {
    slug: "gus-van-sant",
    name: "Gus Van Sant",
    subtitle: "Retrospective Visual Identity",
    frameId: "85:1334",
    thumbnail: {
      src: "/images/home/gus-van-sant.png",
      hoverSrc: "/images/hover/gus-van-sant.png",
      left: 294,
      top: 221,
      width: 93,
      height: 123,
      imageClass: "object-cover",
      hoverImageClass: "object-cover",
    },
  },
  {
    slug: "triz",
    name: "TRIZ",
    subtitle: "Tahini Brand Identity & Packaging",
    frameId: "85:1451",
    thumbnail: {
      src: "/images/home/triz.png",
      hoverSrc: "/images/hover/triz.png",
      left: 664,
      top: 221,
      width: 93,
      height: 123,
      imageClass: "object-cover",
    },
  },
  {
    slug: "bear-umbrella-loser",
    name: "Bear, Umbrella & Loser",
    subtitle: "Experimental Stamp Printing",
    frameId: "58:851",
    thumbnail: {
      src: "/images/home/bear-umbrella-loser.png",
      hoverSrc: "/images/hover/bear-umbrella-loser.png",
      left: 1025,
      top: 83,
      width: 93,
      height: 123,
      imageClass:
        "absolute h-[539.16%] left-[-520.85%] max-w-none top-[-202.39%] w-[1004.61%]",
    },
  },
  {
    slug: "trails",
    name: "Trails",
    subtitle: "Travel App & Website Design",
    frameId: "85:1295",
    thumbnail: {
      src: "/images/home/trails.png",
      hoverSrc: "/images/hover/trails.png",
      left: 1392,
      top: 221,
      width: 93,
      height: 123,
      imageClass:
        "absolute h-[500%] left-[-532.79%] max-w-none top-[-158.9%] w-[810.88%]",
    },
  },
  {
    slug: "hitchcock",
    name: "Hitchcock",
    subtitle: "Image Making & Visual Storytelling",
    frameId: "85:1252",
    thumbnail: {
      src: "/images/home/hitchcock.png",
      hoverSrc: "/images/hover/hitchcock.png",
      left: 51,
      top: 494,
      width: 93,
      height: 123,
      imageClass:
        "absolute h-[108.13%] left-[-0.08%] max-w-none top-[-5.36%] w-[100.17%]",
    },
  },
  {
    slug: "crumples",
    name: "Crumples",
    subtitle: "Chocolate Brand Identity",
    frameId: "85:1190",
    thumbnail: {
      src: "/images/home/crumples.png",
      hoverSrc: "/images/hover/crumples.png",
      left: 659,
      top: 638,
      width: 93,
      height: 123,
      imageClass:
        "absolute h-full left-[-1.92%] max-w-none top-0 w-[105.77%]",
    },
  },
  {
    slug: "this-is-me",
    name: "This Is Me",
    subtitle: "Short Animated Film",
    frameId: "58:793",
    thumbnail: {
      src: "/images/home/this-is-me.png",
      hoverSrc: "/images/hover/this-is-me.png",
      left: 780,
      top: 638,
      width: 93,
      height: 123,
      imageClass:
        "absolute h-[220.33%] left-[-207.01%] max-w-none top-[-46.14%] w-[521.55%]",
    },
  },
  {
    slug: "oxide",
    name: "Oxide",
    subtitle: "Exhibition Visual Identity",
    frameId: "58:1047",
    thumbnail: {
      src: "/images/home/oxide.png",
      hoverSrc: "/images/hover/oxide.png",
      left: 1392,
      top: 638,
      width: 93,
      height: 123,
      imageClass:
        "absolute h-[123.58%] left-[-36.56%] max-w-none top-[-9.76%] w-[163.44%]",
    },
  },
  {
    slug: "four-directions",
    name: "Four Directions",
    subtitle: "Soap Brand Identity & Packaging",
    frameId: "85:1373",
    thumbnail: {
      src: "/images/home/four-directions.png",
      hoverSrc: "/images/hover/four-directions.png",
      left: 285,
      top: 778,
      width: 93,
      height: 123,
      imageClass:
        "absolute h-[147.94%] left-[-12.32%] max-w-none top-[-36.43%] w-[146.75%]",
    },
  },
  {
    slug: "dudu-tassa",
    name: "Dudu Tassa",
    subtitle: "Album Visual Identity",
    frameId: "71:1133",
    thumbnail: {
      src: "/images/home/dudu-tassa.png",
      hoverSrc: "/images/hover/dudu-tassa.png",
      left: 1025,
      top: 778,
      width: 93,
      height: 123,
      imageClass:
        "absolute h-[346.59%] left-[-246.92%] max-w-none top-[-83.16%] w-[613.49%]",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
