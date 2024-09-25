import Image from "next/image";
import style from "@/modules/sections.module.css"
import Parintii from "@/public/assets/parintii.jpg"
import Nasii from "@/public/assets/nasii.jpg"
import Mosii from "@/public/assets/mosii.jpg"
import { Button } from "@/components/Button";
import { useState } from "react";

const About = () => {
    const [showParinti, setShowParinti] = useState(false)
    const [showNasi, setShowNasi] = useState(false)
    const [showMosi, setShowMosi] = useState(false)

    return (
        <section id="despre" className={style.section} data-title="despre">
            <div className={style.container}>
                <div className={style.description} data-animate-effect="fadeSlideUp">
                    <p>Dacă ai ajuns aici înseamnă că țin la tine și m-aș bucura enorm dacă ai fi alături de mine într-o zi atât de specială!</p>
                </div>
                <div className={style.row} data-box="boxes">
                    <div className={style.box} data-type="flip" data-selected={showNasi} data-animate-effect="fadeSlideLeft">
                        <Button className={style.toggle} variant="accent" mode="text" onClick={() => setShowNasi(!showNasi)}>
                            <div className={style["box-inner"]}>
                                <div className={style["box-front"]}>
                                    <div className={style.text}>
                                        <span className={style.label}>Nașii</span>
                                        <span className={style.value}>Alexandra &amp; Flavius</span>
                                    </div>
                                    <div className={style.button}>
                                        <p>Click here!</p>
                                    </div>
                                </div>

                                <div className={style["box-back"]}>
                                    <div className={style.image}>
                                        <Image src={Nasii} alt="Nasii" />
                                    </div>
                                    <div className={style.button}>
                                        <p>Click here!</p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                    </div>
                    <div className={style.box} data-type="flip" data-selected={showParinti} data-animate-effect="fadeSlideUp">
                        <Button className={style.toggle} variant="accent" mode="text" onClick={() => setShowParinti(!showParinti)}>
                            <div className={style["box-inner"]}>
                                <div className={style["box-front"]}>
                                    <div className={style.text}>
                                        <span className={style.label}>Dragii mei parinți</span>
                                        <span className={style.value}>Monica &amp; Eduard</span>
                                    </div>
                                    <div className={style.button}>
                                        <p>Click here!</p>
                                    </div>
                                </div>
                                <div className={style["box-back"]}>
                                    <div className={style.image}>
                                        <Image src={Parintii} alt="Parintii " />
                                    </div>
                                    <div className={style.button}>
                                        <p>Click here!</p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                    </div>
                    <div className={style.box} data-type="flip" data-selected={showMosi} data-animate-effect="fadeSlideRight">
                        <Button className={style.toggle} variant="accent" mode="text" onClick={() => setShowMosi(!showMosi)}>
                            <div className={style["box-inner"]}>
                                <div className={style["box-front"]}>
                                    <div className={style.text}>
                                        <span className={style.label}>Moșii</span>
                                        <span className={style.value}>Oana &amp; Alex</span>
                                    </div>
                                    <div className={style.button}>
                                        <p>Click here!</p>
                                    </div>
                                </div>
                                <div className={style["box-back"]}>
                                    <div className={style.image}>
                                        <Image src={Mosii} alt="Mosii" />
                                    </div>
                                    <div className={style.button}>
                                        <p>Click here!</p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;