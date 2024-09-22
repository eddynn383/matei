import { NavigationMenuItem } from "../NavigationMenuItem"
import { NavigationMenuProps } from "./interface"
import navigation from "./navigation.module.css"

export const NavigationMenu = ({ data, scroll = false }: NavigationMenuProps) => {

    return (
        <nav className={navigation.menu}>
            <ul className={navigation.list}>
                {
                    data?.map((item: any) => (
                        <li className={navigation["list-item"]} key={item?.id}>
                            <NavigationMenuItem path={item.path} title={item?.title} scrollToSection={scroll} />
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
