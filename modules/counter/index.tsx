"use client"

import style from "@/modules/sections.module.css"
import { useEffect, useState, useRef } from "react";

const Counter = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // States for animating numbers
    const [animatedDays, setAnimatedDays] = useState(0);
    const [animatedHours, setAnimatedHours] = useState(0);
    const [animatedMinutes, setAnimatedMinutes] = useState(0);
    const [animatedSeconds, setAnimatedSeconds] = useState(0);

    const sectionRef = useRef<HTMLElement | null>(null);
    const hasAnimated = useRef(false); // To ensure the animation happens only once

    useEffect(() => {
        const target = new Date("10/05/2024 18:59:59");

        const updateCountdown = () => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((difference % (1000 * 60)) / 1000);

            setDays(d);
            setHours(h);
            setMinutes(m);
            setSeconds(s);
        };

        // Initial countdown update
        updateCountdown();

        // Set up the interval to keep updating the countdown every second
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    animateNumbers();
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [days, hours, minutes, seconds]);

    const animateNumbers = () => {
        // Animate from 0 to the real-time countdown values
        animateValue(0, days, 1000, setAnimatedDays);
        animateValue(0, hours, 1000, setAnimatedHours);
        animateValue(0, minutes, 1000, setAnimatedMinutes);
        animateValue(0, seconds, 1000, setAnimatedSeconds);
    };

    const animateValue = (start: number, end: number, duration: number, setValue: (value: number) => void) => {
        const range = end - start;
        let startTime: number | null = null;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentValue = Math.floor(progress * range + start);
            setValue(currentValue);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

    // Ensure animated values are updated in real-time after the animation finishes
    useEffect(() => {
        if (hasAnimated.current) {
            setAnimatedDays(days);
            setAnimatedHours(hours);
            setAnimatedMinutes(minutes);
            setAnimatedSeconds(seconds);
        }
    }, [days, hours, minutes, seconds]);

    return (
        <section ref={sectionRef} className={style.section} data-title="counter">
            <div className={style.row}>
                <div className={style.intro}>
                    <p>Încă puțin până la ziua cea mare:</p>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.box}>
                    <span className={style.value}>{animatedDays}</span>
                    <span className={style.label}>Zile</span>
                </div>
                <div className={style.box}>
                    <span className={style.value}>{animatedHours}</span>
                    <span className={style.label}>Ore</span>
                </div>
                <div className={style.box}>
                    <span className={style.value}>{animatedMinutes}</span>
                    <span className={style.label}>Minute</span>
                </div>
                <div className={style.box}>
                    <span className={style.value}>{animatedSeconds}</span>
                    <span className={style.label}>Secunde</span>
                </div>
            </div>
        </section>
    );
};

export default Counter;
