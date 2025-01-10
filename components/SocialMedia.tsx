import React from "react";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { Github, icons, Instagram, Linkedin, Youtube } from "lucide-react";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

interface SocialMediaProps {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLinks = [
  {
    title: "Youtube",
    href: "https://www.youtube.com",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://github.com/Ali88646",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/ali-ahmed-a86419131/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com",
    icon: <Instagram className="w-5 h-5" />,
  },
];
const SocialMedia: React.FC<SocialMediaProps> = ({
  className,
  iconClassName,
  tooltipClassName,
}) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLinks?.map((item) => {
          return (
            <Tooltip key={item?.title}>
              <TooltipTrigger asChild>
                <Link
                  href={item?.href}
                  target="_blank"
                  rel="noopener noreferer"
                  className={cn(
                    "p-2 border rounded-full hover:text-white hover:border-white hoverEffect",
                    iconClassName
                  )}
                >
                  {item?.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className={cn(
                  "bg-white text-darkColor font-semibold px-1 py-0.5 text-sm rounded-sm",
                  tooltipClassName
                )}
              >
                {item?.title}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
