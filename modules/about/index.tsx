import Image from "next/image";
import style from "@/modules/sections.module.css"
import Parintii from "@/public/assets/parintii.jpg"
import Nasii from "@/public/assets/nasii.jpg"
import Mosii from "@/public/assets/mosii.jpg"

const About = () => {
    return (
        <section id="despre" className={style.section} data-title="despre">
            <div className={style.container}>
                <div className={style.description}>
                    {/* <div className="img"><img src="https://www.inviteme.ro/media/cache/square_thumb_800/uploads/66e8590231199/66e85e63077ae.jpg" alt="" /></div> */}

                    <p>Dacă ai ajuns aici înseamnă că țin la tine și m-aș bucura enorm dacă ai fi alături de mine într-o zi atât de specială!</p>
                </div>
                <div className={style.row} data-box="boxes">
                    <div className={style.box} data-type="flip">
                        <div className={style["box-inner"]}>
                            <div className={style["box-front"]}>
                                <div className={style.text}>
                                    <span className={style.label}>Nașii</span>
                                    <span className={style.value}>Alexandra si Flavius</span>
                                </div>
                            </div>
                            <div className={style["box-back"]}>
                                <div className={style.image}>
                                    <Image src={Nasii} alt="Nasii" />
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-12 text-center animate-box fadeInUp animated" data-animate-effect="fadeInUp"> */}
                        {/* </div> */}
                    </div>
                    <div className={style.box} data-type="flip">
                        <div className={style["box-inner"]}>
                            <div className={style["box-front"]}>
                                <div className={style.text}>
                                    <span className={style.label}>Dragii mei parinti</span>
                                    <span className={style.value}>Monica &amp; Eduard</span>
                                </div>
                            </div>
                            <div className={style["box-back"]}>
                                <div className={style.image}>
                                    <Image src={Parintii} alt="Parintii " />
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-12 text-center animate-box fadeInUp animated" data-animate-effect="fadeInUp"> */}
                        {/* </div> */}
                    </div>



                    <div className={style.box} data-type="flip">
                        <div className={style["box-inner"]}>
                            <div className={style["box-front"]}>
                                <div className={style.text}>
                                    <span className={style.label}>Moșii</span>
                                    <span className={style.value}>Oana si Alex</span>
                                </div>
                            </div>
                            <div className={style["box-back"]}>
                                <div className={style.image}>
                                    <Image src={Mosii} alt="Mosii" />
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-12 text-center animate-box fadeInUp animated" data-animate-effect="fadeInUp"> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
