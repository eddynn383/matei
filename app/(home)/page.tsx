import Overview from "@/modules/overview";
import About from "@/modules/about";
import Where from "@/modules/where";
import Counter from "@/modules/counter";
import Story from "@/modules/story";

const Home = async () => {
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