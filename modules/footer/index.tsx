import style from "@/modules/sections.module.css"

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className={style.footer}>
            <span>Matei ©{year}</span>
        </footer>
    )
}

export default Footer;