"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenuItemProps } from "./interface";
import { Button } from "../Button";
import navigation from "@/components/NavigationMenu/navigation.module.css"
import { useContext } from "react";
import { ToggleContext } from "@/context/toggleContext";
import { useActiveSection } from "@/context/activeSectionContext";

export const NavigationMenuItem = ({ title, path, scrollToSection = false }: NavigationMenuItemProps) => {
    const pathname = usePathname();
    const { handleState } = useContext(ToggleContext)
    const { activeSection } = useActiveSection();

    console.log(activeSection)

    const isActive =
        (pathname === "/" && path === "/") ||
        pathname === path ||
        pathname?.startsWith(`${path}/`)

    const scrollToSectionHandler = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" });
        handleState(false)
    };

    return (
        <>
            {scrollToSection && <Button mode="text" variant="primary" selected={activeSection === path ? true : false} onClick={() => scrollToSectionHandler(path)}>{title}</Button>}
            {!scrollToSection && <Link className={navigation.item} href={path} title={title} data-active={isActive}>{title}</Link>}
        </>
    )
}
