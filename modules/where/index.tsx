import Image from "next/image";
import style from "@/modules/sections.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChampagneGlasses, faChevronRight, faChurch, faClock, faLocationDot, faSignsPost } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/Button";
import Biserica from "@/public/assets/biserica.jpg"
import Hotel from "@/public/assets/hotel.webp"

const Where = () => {
    return (
        <section id="unde" className={style.section} data-title="unde">
            <div className={style.container}>
                <div className={style.title}>
                    <span>Locații</span>
                    <h2>Unde și când</h2>
                </div>
                <div className={style.content}>
                    <div className={style.box} data-type="flip" data-animate-effect="fadeSlideUp">
                        <div className={style["box-inner"]}>
                            <div className={style["box-front"]}>
                                <div className={style.ceremony}>
                                    <FontAwesomeIcon icon={faChurch} className={style["church-icon"]} />
                                    <h3>Ceremonia religioasă</h3>
                                    <div className={style.time}>
                                        <span>Sâmbătă, 5 Octombrie 2024, 15:00</span>
                                    </div>
                                    <div className={style.address}>
                                        <span>Biserica Sfântul Ilie</span>
                                        <span>Strada C. S. Nicolaescu Plopșor, 3</span>
                                        <span>Craiova, România</span>
                                    </div>
                                    {/* <div className={style.link}>
                                        <Button variant="accent" mode="text" content="text-icon">Vezi hartă <FontAwesomeIcon icon={faChevronRight} className={style.icon} /></Button>
                                    </div> */}
                                </div>
                            </div>
                            <div className={style["box-back"]}>
                                <div className={style.image}>
                                    <Image src={Biserica} alt="Biserica" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.box} data-type="flip" data-animate-effect="fadeSlideDown">
                        <div className={style["box-inner"]}>
                            <div className={style["box-front"]}>
                                <div className={style.party}>
                                    <FontAwesomeIcon icon={faChampagneGlasses} className={style["party-icon"]} />
                                    <h3>Petrecerea</h3>
                                    <div className={style.time}>
                                        <span>Sâmbătă, 5 Octombrie 2024, 19:00</span>
                                    </div>
                                    <div className={style.address}>
                                        <span>Restaurant Craiovita</span>
                                        <span>Calea Severinului, 13</span>
                                        <span>Craiova, România</span>
                                    </div>
                                    {/* <div className={style.link}>
                                    <Button variant="accent" mode="text" content="text-icon">Vezi hartă <FontAwesomeIcon icon={faChevronRight} className={style.icon} /></Button>
                                </div> */}
                                    {/* <p><i className="ti-direction"></i> <a href="javascript:;" className="hover-arrow directionsButton" data-lat="44.3364632" data-lng="23.765198">Vezi hartă <span className="fa fa-arrow-right"></span></a></p> */}
                                </div>
                            </div>
                            <div className={style["box-back"]}>
                                <div className={style.image}>
                                    <Image src={Hotel} alt="Hotel" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Where;