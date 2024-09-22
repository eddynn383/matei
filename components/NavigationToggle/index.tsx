"use client"

import { useContext } from "react"
import { Button } from "../Button"
import { NavigationToggleProps } from "./interface"
import { ToggleContext } from "@/context/toggleContext"
import toggle from "./toggle.module.css"

export const NavigationToggle = ({ className = toggle.container }: NavigationToggleProps) => {

    const { state, handleState } = useContext(ToggleContext)

    return (
        <div className={toggle.button}>
            <Button variant="accent" content="icon" onClick={handleState}>
                <div className={className} data-state={state ? 'open' : "close"}>
                    <span className={toggle.bar} data-position="top"></span>
                    <span className={toggle.bar} data-position="middle"></span>
                    <span className={toggle.bar} data-position="bottom"></span>
                </div>
            </Button>
        </div>
    )
}
