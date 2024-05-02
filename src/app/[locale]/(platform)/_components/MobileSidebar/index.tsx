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
import { Separator } from "@/components/ui/separator";
import { BiSolidHome } from "react-icons/bi";

import { FaCubes } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { FaServer } from "react-icons/fa";
import { BsServer } from "react-icons/bs";

export const MobileSidebar = ({ data }: MobileSidebarTypes) => {
  const moblileSidebarData = getMobileSidebarData(data);
  const { isActive, setIsActive } = useBurgerButtonContext();

  const sheetCloserHandler = () => setIsActive(false);

  return (
    <div
      className={`fixed px-5 pt-[150px] w-full h-full flex flex-col  dark:bg-custom-gradient bg-custom-gradient transition-transform duration-300 ease-in-out ${
        isActive ? "transform translate-x-0" : "transform translate-x-[-100%]"
      } md:hidden`}
    >
      <Link onClick={sheetCloserHandler} href="/">
        <div className="flex justify-between items-center">
          <BiSolidHome className="h-8 text-xl" />
          <span className="text-xl">{data.home.title}</span>
          <div className="pr-5"></div>
        </div>
      </Link>
      <Separator />
      <Accordion type="single" collapsible>
        {moblileSidebarData.map((item, idx) => (
          <AccordionItem key={idx} value={item.title}>
            <AccordionTrigger>
              <div>
                {idx === 0 ? <FaCubes className="h-8 text-xl" /> : null}
                {idx === 1 ? <FiMonitor className="h-8 text-xl" /> : null}
                {idx === 2 ? <FaServer className="h-8 text-xl" /> : null}
                {idx === 3 ? <BsServer className="h-8 text-xl" /> : null}
              </div>

              <p className="text-lg">{item.title}</p>
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {item.items.map((item, idx) => (
                  <li key={idx}>
                    <Link onClick={sheetCloserHandler} href={item.href}>
                      <p className="text-md py-3">{item.label}</p>
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
