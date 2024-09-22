import { NavigationToggle } from "@/components/NavigationToggle";
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
            {/* <header >
                <Button type="button" size="M" content="icon" shade="200" name="Toggle Menu" title={state ? "Click to collapse" : "Click to expand"} onClick={handleState} >
                    <NavigationToggle state={state} />
                </Button>
            </header> */}
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}

export default HomeLayout;