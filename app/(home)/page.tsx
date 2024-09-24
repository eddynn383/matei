"use client"

import Overview from "@/modules/overview";
import About from "@/modules/about";
import Where from "@/modules/where";
import Counter from "@/modules/counter";
import Story from "@/modules/story";
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