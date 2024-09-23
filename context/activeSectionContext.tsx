"use client"

import { createContext, useState, useContext, ReactNode } from "react";

interface ActiveSectionContextType {
    activeSection: string | null;
    setActiveSection: (section: string) => void;
}

interface ActiveSectionProviderProps {
    children: ReactNode;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined)

export const useActiveSection = (): ActiveSectionContextType => {
    const context = useContext(ActiveSectionContext)
    if (!context) {
        throw new Error("useActiveSection must be used within an ActiveSectionProvider")
    }

    return context;
}

export const ActiveSectionProvider = ({ children }: ActiveSectionProviderProps) => {
    const [activeSection, setActiveSection] = useState<string | null>(null)

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </ActiveSectionContext.Provider>
    )
}