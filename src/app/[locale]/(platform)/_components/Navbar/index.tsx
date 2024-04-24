"use client";

import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { getNavbarData } from "./navbarData";
import LanguageChanger from "@/lib/LanguageChanger";

import { useTranslations } from "@/hooks/useTranslations";
import { navbarNamespaces } from "@/constants/namespaces/othersNamespaces";

export const Navbar = () => {
  const translations = useTranslations(navbarNamespaces);

  if (!translations) {
    return <div>Loading...</div>;
  }

  const { t } = translations;

  const navbarData = getNavbarData(t);

  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t("data.home.title")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {navbarData.map((component) => (
            <NavigationMenuItem key={component.title}>
              <NavigationMenuTrigger>{component.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {component.items &&
                    component.items.map((component) => (
                      <ListItem
                        key={component.label}
                        title={component.label}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <LanguageChanger />
      </NavigationMenu>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
