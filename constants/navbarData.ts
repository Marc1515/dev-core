export type NavbarSectionType = {
  title: string;
  items: {
    label: string;
    href: string;
    description: string;
  }[];
};

export type NavbarDataType = NavbarSectionType[];

export const navbarData: NavbarDataType = [
  {
    title: "Fundamentals",
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
    title: "Data-Bases",
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
