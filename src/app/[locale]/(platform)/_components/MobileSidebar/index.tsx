"use client";

import React from "react";

import { MobileSidebarTypes } from "./types";
import { getMobileSidebarData } from "./moblileSidebarData";
import LanguageChanger from "@/lib/LanguageChanger";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useBurgerButtonContext } from "@/contexts/BurgerButtonContext";

export const MobileSidebar = ({ data }: MobileSidebarTypes) => {
  const moblileSidebarData = getMobileSidebarData(data);
  const { isActive, setIsActive } = useBurgerButtonContext();

  const sheetCloserHandler = () => setIsActive(false);

  return (
    <div
      className={`fixed px-5 pt-[150px] w-full h-full flex flex-col bg-slate-50 transition-transform duration-300 ease-in-out ${
        isActive ? "transform translate-x-0" : "transform translate-x-[-100%]"
      } md:hidden`}
    >
      <Link onClick={sheetCloserHandler} href="/">
        <span>{data.home.title}</span>
      </Link>
      <Accordion type="single" collapsible>
        {moblileSidebarData.map((item, idx) => (
          <AccordionItem key={idx} value={item.title}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
              <ul>
                {item.items.map((item, idx) => (
                  <li key={idx}>
                    <Link onClick={sheetCloserHandler} href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <LanguageChanger />
    </div>
  );
};
