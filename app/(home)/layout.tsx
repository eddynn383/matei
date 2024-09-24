import Footer from "@/modules/footer";
import Sidebar from "@/modules/sidebar";
import styles from "./page.module.css";

import { ActiveSectionProvider } from "@/context/activeSectionContext";

const HomeLayout = async ({
    children
}: {
    children: React.ReactNode
}) => {

    return (
        <ActiveSectionProvider>
            <div className={styles.layout}>
                <Sidebar />
                <main className={styles.main}>
                    {children}
                    <Footer />
                </main>
            </div>
        </ActiveSectionProvider>
    );
}

export default HomeLayout;