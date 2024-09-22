"use client"

import style from "@/modules/sections.module.css"
import { useEffect, useState } from "react";

const Counter = () => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {

        const target = new Date("10/05/2024 18:59:59")

        const interval = setInterval(() => {
            const now = new Date()
            const difference = target.getTime() - now.getTime()

            const d = Math.floor(difference / (1000 * 60 * 60 * 24))
            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
            const s = Math.floor((difference % (1000 * 60)) / 1000)

            setDays(d)
            setHours(h)
            setMinutes(m)
            setSeconds(s)

        }, 1000)

        return () => clearInterval(interval)
    })

    return (
        <section className={style.section} data-title="counter">
            <div className={style.row}>
                <div className={style.intro}>
                    <p>Încă puțin până la ziua cea mare:</p>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.box}>
                    <span className={style.value}>{days}</span>
                    <span className={style.label}>Zile</span>
                </div>
                <div className={style.box}>
                    <span className={style.value}>{hours}</span>
                    <span className={style.label}>Ore</span>
                </div>
                <div className={style.box}>
                    <span className={style.value}>{minutes}</span>
                    <span className={style.label}>Minute</span>
                </div>
                <div className={style.box}>
                    <span className={style.value}>{seconds}</span>
                    <span className={style.label}>Secunde</span>
                </div>
            </div>

        </section>
    )
}

export default Counter;