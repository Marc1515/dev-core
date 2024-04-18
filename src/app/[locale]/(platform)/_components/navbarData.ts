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
    title: t("fundamentals_name"),
    items: [
      {
        label: "HTML5",
        href: "/fundamentals/html5",
        description: t("html5_description"),
      },
      {
        label: "CSS3",
        href: "/fundamentals/css3",
        description: t("css3_description"),
      },
      {
        label: "JavaScript",
        href: "/fundamentals/javascript",
        description: t("javascript_description"),
      },
      {
        label: "TypeScript",
        href: "/fundamentals/typescript",
        description: t("typescript_description"),
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
    title: t("db_name"),
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
