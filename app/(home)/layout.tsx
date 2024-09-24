import Sidebar from "@/components/Sidebar";
import Footer from "@/modules/footer";
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