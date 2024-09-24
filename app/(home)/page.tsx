"use client"

import Overview from "@/modules/Overview";
import About from "@/modules/About";
import Where from "@/modules/Where";
import Counter from "@/modules/Counter";
import Story from "@/modules/Story";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Home = () => {

    useIntersectionObserver();

    return (
        <>
            <Overview />
            <About />
            <Counter />
            <Story />
            <Where />
        </>
    );
}

export default Home;