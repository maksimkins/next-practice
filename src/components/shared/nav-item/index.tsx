"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { NavBarProps } from "@/components/helpers/interfaces/navbar";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

interface NavItemProps {
  item: NavBarProps;
}

export default function NavItem({ item }: NavItemProps) {
  const path = usePathname();
  // const isActive = path.startsWith(`/docs/${item.category?.toLowerCase()}`);

  const isActive = false;

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(isActive && "font-bold bg-slate-500")}
      >
        {item.name}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
          {item.subcategories.map((subcategory) => (
            <ListItem
              key={subcategory.id}
              title={subcategory.name}
              href={subcategory.href}
            >
              {subcategory.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

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