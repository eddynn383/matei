import Image from "next/image";
import style from "@/modules/sections.module.css";
import Parintii from "@/public/assets/parintii.jpg";
import Nasii from "@/public/assets/nasii.jpg";
import Mosii from "@/public/assets/mosii.jpg";
import { Button } from "@/components/Button";
import { useState, useEffect } from "react";

interface TiltData {
    rotateX: number;
    rotateY: number;
    rotateZ: number;
}

const About = () => {
    const [showParinti, setShowParinti] = useState<boolean>(false);
    const [showNasi, setShowNasi] = useState<boolean>(false);
    const [showMosi, setShowMosi] = useState<boolean>(false);

    const [tiltData, setTiltData] = useState<TiltData>({
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
    });

    // Use gyroscope for subtle tilt effect
    useEffect(() => {
        const handleOrientation = (event: DeviceOrientationEvent) => {
            let { alpha, gamma, beta } = event; // Alpha: Z axis (compass), Gamma: left-right, Beta: front-back

            if (alpha == null || gamma == null || beta == null) return;

            // Adjust based on the fact that when the phone is held naturally upright, beta is around 90 degrees
            beta = beta - 90;

            // Scale down the tilt effect for subtleness (dividing by larger numbers will reduce tilt)
            const rotateY = gamma / 15; // Horizontal tilt (Y axis)
            const rotateX = beta / 15; // Vertical tilt (X axis)
            const rotateZ = alpha / 30; // Rotation along Z-axis (rolling effect, like turning the phone around the depth axis)

            setTiltData({
                rotateX,
                rotateY,
                rotateZ,
            });
        };

        if (window.DeviceOrientationEvent) {
            window.addEventListener("deviceorientation", handleOrientation);
        }

        return () => {
            window.removeEventListener("deviceorientation", handleOrientation);
        };
    }, []);

    // Apply the subtle tilt style based on the gyroscope data
    const tiltStyle = (rotateX: number, rotateY: number, rotateZ: number) => ({
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
    });

    return (
        <section id="despre" className={style.section} data-title="despre">
            <div className={style.container}>
                <div className={style.description} data-animate-effect="fadeSlideUp">
                    <p>
                        Dacă ai ajuns aici înseamnă că țin la tine și m-aș bucura enorm dacă
                        ai fi alături de mine într-o zi atât de specială!
                    </p>
                </div>
                <div className={style.row} data-box="boxes">
                    <div
                        className={style.box}
                        data-type="flip"
                        data-selected={showNasi}
                        data-animate-effect="fadeSlideLeft"
                        style={tiltStyle(tiltData.rotateX, tiltData.rotateY, tiltData.rotateZ)}
                    >
                        <Button
                            className={style.toggle}
                            variant="accent"
                            mode="text"
                            onClick={() => setShowNasi(!showNasi)}
                        >
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

                    <div
                        className={style.box}
                        data-type="flip"
                        data-selected={showParinti}
                        data-animate-effect="fadeSlideUp"
                        style={tiltStyle(tiltData.rotateX, tiltData.rotateY, tiltData.rotateZ)}
                    >
                        <Button
                            className={style.toggle}
                            variant="accent"
                            mode="text"
                            onClick={() => setShowParinti(!showParinti)}
                        >
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
                                        <Image src={Parintii} alt="Parintii" />
                                    </div>
                                    <div className={style.button}>
                                        <p>Click here!</p>
                                    </div>
                                </div>
                            </div>
                        </Button>
                    </div>

                    <div
                        className={style.box}
                        data-type="flip"
                        data-selected={showMosi}
                        data-animate-effect="fadeSlideRight"
                        style={tiltStyle(tiltData.rotateX, tiltData.rotateY, tiltData.rotateZ)}
                    >
                        <Button
                            className={style.toggle}
                            variant="accent"
                            mode="text"
                            onClick={() => setShowMosi(!showMosi)}
                        >
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
    );
};

export default About;
