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
        label: "HTML5",
        href: "/fundamentals/html5",
        description:
          "It allows the structuring of content and is essential for defining the semantics and structure of websites.",
      },
      {
        label: "CSS",
        href: "/fundamentals/css3",
        description:
          "Used to design and customize the visual appearance of web pages, enabling control over layout, colors, fonts, and more.",
      },
      {
        label: "JavaScript",
        href: "/fundamentals/javascript",
        description:
          "It's an interpreted programming language primarily used on the client-side for creating dynamic web pages, enabling interactivity with the user, data manipulation, and more.",
      },
      {
        label: "TypeScript",
        href: "/fundamentals/typescript",
        description:
          "It's a superset of JavaScript, adding static types and class-based objects. It aids in developing large applications and compiles to JavaScript to be executed in the browser.",
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
