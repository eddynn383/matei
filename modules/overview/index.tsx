import Image from "next/image";
import style from "@/modules/sections.module.css"
import simon from "@/public/assets/simba-on-clif.png"
import { Player } from "@/components/Player";

const Overview = () => {

    return (
        <section id="acasa" className={style.section} data-title="acasa">
            <div className={style.player}>
                <Player />
            </div>
            <div className={style.container}>
                <div className={style.row} data-title="image" data-animate-effect="fadeSlideUp">
                    <Image src={simon} alt="simon" />
                </div>
                <div className={style.row} data-title="name">
                    <div className={style.caption}>
                        <h1 className={style.name} data-animate-effect="fadeSlideUp">Matei</h1>
                        <p className={style.date} data-animate-effect="fadeSlideDown">5 Octombrie 2024</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview;