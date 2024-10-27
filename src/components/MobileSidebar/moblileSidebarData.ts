import { Data } from "./types";

export type mobileSidebarSectionType = {
  title: string;
  items: {
    label: string;
    href: string;
    description: string;
  }[];
};

export type mobileSidebarDataType = mobileSidebarSectionType[];

export const getMobileSidebarData = (data: Data): mobileSidebarDataType => [
  {
    title: data.fundamentals.title,
    items: [
      {
        label: data.fundamentals.html5.title,
        href: data.fundamentals.html5.path,
        description: data.fundamentals.html5.description,
      },
      {
        label: data.fundamentals.css3.title,
        href: data.fundamentals.css3.path,
        description: data.fundamentals.css3.description,
      },
      {
        label: data.fundamentals.javascript.title,
        href: data.fundamentals.javascript.path,
        description: data.fundamentals.javascript.description,
      },
      {
        label: data.fundamentals.typescript.title,
        href: data.fundamentals.typescript.path,
        description: data.fundamentals.typescript.description,
      },
    ],
  },
  {
    title: "Front-End",
    items: [
      {
        label: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        label: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
          "For sighted users to preview content available behind a link.",
      },
      {
        label: "Progress",
        href: "/docs/primitives/progress",
        description:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
      {
        label: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
      },
    ],
  },
  {
    title: "Back-End",
    items: [
      {
        label: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        label: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
          "For sighted users to preview content available behind a link.",
      },
      {
        label: "Progress",
        href: "/docs/primitives/progress",
        description:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
      {
        label: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
      },
    ],
  },
  {
    title: data.data_bases.title,
    items: [
      {
        label: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        label: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
          "For sighted users to preview content available behind a link.",
      },
      {
        label: "Progress",
        href: "/docs/primitives/progress",
        description:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
      {
        label: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
      },
    ],
  },
];
