"use client";

import React, { FC } from "react";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface MegaMenuType {
  title: string;
  services: {
    title: string;
    slug: string;
    description: string;
  }[];
}

const megaMenu: MegaMenuType[] = [
  {
    title: "Top Booked",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description:
          "In this episode, we take our app to the next level by enhancing the Hero Section with dynamic text transitions using React",
      },
      {
        title: "Video Prescription Refill",
        slug: "video-prescription-refill",
        description:
          "In this episode, we take our app to the next level by enhancing the Hero Section with dynamic text transitions using React",
      },
      {
        title: "In-Person Doctor Visit",
        slug: "inperson-doctor-visit",
        description:
          "In this episode, we take our app to the next level by enhancing the Hero Section with dynamic text transitions using React",
      },
      {
        title: "UTI Consult",
        slug: "uti-consult",
        description:
          "In this episode, we take our app to the next level by enhancing the Hero Section with dynamic text transitions using React",
      },
    ],
  },
  {
    title: "Doctors",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description:
          "In this episode, we take our app to the next level by enhancing the Hero Section with dynamic text transitions using React",
      },
      {
        title: "Video Prescription Refill",
        slug: "video-prescription-refill",
        description:
          "In this episode, we take our app to the next level by enhancing the Hero Section with dynamic text transitions using React",
      },
      {
        title: "In-Person Doctor Visit",
        slug: "inperson-doctor-visit",
        description:
          "In this episode, we take our app to the next level by enhancing the Hero Section with dynamic text transitions using React",
      },
      {
        title: "UTI Consult",
        slug: "uti-consult",
        description:
          "In this episode, we take our app to the next level by enhancing the Hero Section with dynamic text transitions using React",
      },
    ],
  },
  {
    title: "Specialists",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description:
          "In this episode, we take our app to the next level by enhancing the Hero Section with dynamic text transitions using React",
      },
      {
        title: "Video Prescription Refill",
        slug: "video-prescription-refill",
        description:
          "In this episode, we take our app to the next level by enhancing the Hero Section with dynamic text transitions using React",
      },
      {
        title: "In-Person Doctor Visit",
        slug: "inperson-doctor-visit",
        description:
          "In this episode, we take our app to the next level by enhancing the Hero Section with dynamic text transitions using React",
      },
      {
        title: "UTI Consult",
        slug: "uti-consult",
        description:
          "In this episode, we take our app to the next level by enhancing the Hero Section with dynamic text transitions using React",
      },
    ],
  },
  {
    title: "Symptoms",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description:
          "In this episode, we take our app to the next level by enhancing the Hero Section with dynamic text transitions using React",
      },
      {
        title: "Video Prescription Refill",
        slug: "video-prescription-refill",
        description:
          "In this episode, we take our app to the next level by enhancing the Hero Section with dynamic text transitions using React",
      },
      {
        title: "In-Person Doctor Visit",
        slug: "inperson-doctor-visit",
        description:
          "In this episode, we take our app to the next level by enhancing the Hero Section with dynamic text transitions using React",
      },
      {
        title: "UTI Consult",
        slug: "uti-consult",
        description:
          "In this episode, we take our app to the next level by enhancing the Hero Section with dynamic text transitions using React",
      },
    ],
  },
];

export const MegaMenu: FC = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-4">
        {megaMenu.map((menuItem, i) => (
          <NavigationMenuItem key={i}>
            <NavigationMenuTrigger>{menuItem.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {menuItem.services.map((service, i) => (
                  <ListItem
                    key={service.title}
                    title={service.title}
                    href={`/services/${service.slug}`}
                  >
                    {service.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
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
