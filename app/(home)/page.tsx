import Overview from "@/modules/overview";
import About from "@/modules/about";
import Where from "@/modules/where";
import Counter from "@/modules/counter";

const Home = async () => {
    return (
        <>
            <Overview />
            <About />
            <Counter />
            <Where />
        </>
    );
}

export default Home;