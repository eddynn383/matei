"use client"

import { useContext } from "react";

import Image from "next/image";
import { NavigationMenu } from "@/components/NavigationMenu";
import { NavigationToggle } from "@/components/NavigationToggle";
import { ToggleContext } from "@/context/toggleContext";
import { Player } from "@/components/Player";
import Lion from "@/public/assets/lion-head.svg"
import Arabesque from "@/public/assets/aragesque-line-2.svg"
import styles from "@/app/(home)/page.module.css";

const Sidebar = () => {

    const { state } = useContext(ToggleContext)

    const navData = [
        {
            id: 1,
            title: "Acasa",
            path: "acasa"
        },
        {
            id: 2,
            title: "Despre",
            path: "despre"
        },
        {
            id: 3,
            title: "Eveniment",
            path: "eveniment"
        },
        {
            id: 4,
            title: "Unde si cand",
            path: "unde"
        }
    ]

    return (
        <aside className={styles.sidebar} data-device="desktop" data-state={state ? "open" : "close"} >
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.decoration}>
                        <Image src={Arabesque} alt="Arabesque" />
                    </div>
                    <Image src={Lion} alt="Lion Head" width={140} height={140} />
                </div>
                <div className={styles.middle}>
                    <NavigationMenu data={navData} scroll={true} />
                </div>
                <div className={styles.bottom}>
                    <Player />
                    <div className={styles.decoration}>
                        <Image src={Arabesque} alt="Arabesque" />
                    </div>
                </div>
            </div>
            <NavigationToggle />
        </aside>
    )
}

export default Sidebar;