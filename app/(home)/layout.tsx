import Footer from "@/modules/footer";
import styles from "./page.module.css";

import Sidebar from "@/modules/Sidebar";

const HomeLayout = async ({
    children
}: {
    children: React.ReactNode
}) => {

    return (
        <div className={styles.layout}>
            <Sidebar />
            <main className={styles.main}>
                {children}
                <Footer />
            </main>
        </div>
    );
}

export default HomeLayout;