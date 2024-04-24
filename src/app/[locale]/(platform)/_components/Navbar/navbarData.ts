export type NavbarSectionType = {
  title: string;
  items: {
    label: string;
    href: string;
    description: string;
  }[];
};

export type NavbarDataType = NavbarSectionType[];

export const getNavbarData = (t: (key: string) => string): NavbarDataType => [
  {
    title: t("data.fundamentals.title"),
    items: [
      {
        label: "HTML5",
        href: "/fundamentals/html5",
        description: t("data.fundamentals.html5.description"),
      },
      {
        label: "CSS3",
        href: "/fundamentals/css3",
        description: t("data.fundamentals.css3.description"),
      },
      {
        label: "JavaScript",
        href: "/fundamentals/javascript",
        description: t("data.fundamentals.javascript.description"),
      },
      {
        label: "TypeScript",
        href: "/fundamentals/typescript",
        description: t("data.fundamentals.typescript.description"),
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
    title: t("data.data_bases.title"),
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
