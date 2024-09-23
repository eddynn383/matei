"use client"

import { useActiveSection } from "@/context/activeSectionContext"
import { useEffect } from "react";

export const useIntersectionObserver = () => {
    const { setActiveSection } = useActiveSection();

    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>('section')
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const section = entry.target as HTMLElement;
                const inViewport = entry.isIntersecting;

                section.setAttribute('data-viewport', inViewport.toString());

                if (inViewport) {
                    setActiveSection(section.id)
                }
            })
        }, { threshold: 0.5 })
        sections.forEach((section) => observer.observe(section))

        return () => {
            sections.forEach((section) => observer.unobserve(section))
        }
    }, [setActiveSection])
}