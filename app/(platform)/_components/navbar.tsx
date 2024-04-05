import React from "react";
import { NavItem } from "./nav-item";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Home,
  BrickWall,
  MonitorSmartphone,
  Building2,
  Database,
} from "lucide-react";

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

export const Navbar = () => {
  return (
    <nav className="w-full h-14 top-0 border-b border-white ">
      <div className="flex justify-center gap-x-3">
        {routes.map((route) => (
          <Accordion key={route.label} type="multiple">
            <AccordionItem value={route.label} className="border-none">
              <AccordionTrigger className="flex">
                <div className="flex items-center gap-x-2">
                  <span className="font-medium text-sm">{route.label}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>Content</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </nav>
  );
};
