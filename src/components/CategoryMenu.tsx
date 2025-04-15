"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { topCategories } from "@/lib/categories";
import { Link } from "react-router-dom";

export const CategoryMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Object.entries(topCategories).map(([category, items]) => (
          <NavigationMenuItem key={category}>
            <NavigationMenuTrigger>{category}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col w-[730px] gap-1 p-2">
                {items.map((slug) => (
                  <li key={slug}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={`/category/${slug}`}
                        className="block select-none rounded-md p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        {slug.replace(/-/g, " ")}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
