import React from "react";

import {
  Home,
  BrickWall,
  MonitorSmartphone,
  Building2,
  Database,
} from "lucide-react";

export const NavItem = () => {
  const routes = [
    {
      label: "Home",
      icon: <Home className="w-4 h-4" />,
      href: "/",
    },
    {
      label: "Fundamentals",
      icon: <BrickWall className="w-4 h-4" />,
      href: "/fundamentals",
    },
    {
      label: "Front-End",
      icon: <MonitorSmartphone className="w-4 h-4" />,
      href: "/frontend",
    },
    {
      label: "Back-End",
      icon: <Building2 className="w-4 h-4" />,
      href: "/backend",
    },
    {
      label: "Data-Base",
      icon: <Database className="w-4 h-4" />,
      href: "/database",
    },
  ];

  return <div>NavItem</div>;
};
