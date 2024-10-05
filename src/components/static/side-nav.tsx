import {  LayoutDashboard,ImageIcon,VideoIcon,FileAudioIcon } from "lucide-react";


import { type LucideIcon } from "lucide-react";

export interface NavItem {
    title: string;
    href: string;
    icon: LucideIcon;
    color?: string;
    isChidren?: boolean;
    children?: NavItem[];
}
export const NavItems: NavItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    title: "Image Generator",
    icon: ImageIcon,
    href: "/example",
    color: "text-sky-500",
   
  },
  {
    title: "Video Generator",
    icon: VideoIcon,
    href: "/example",
    color: "text-sky-500",
   
  },
  {
    title: "Audio Generator",
    icon: FileAudioIcon,
    href: "/example",
    color: "text-sky-500",
   
  },
];