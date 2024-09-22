import style from "@/modules/sections.module.css"

const About = () => {
    return (
        <section id="despre" className={style.section} data-title="despre">
            <div className={style.container}>
                <div className={style.row} data-box="intro">
                    {/* <div className="img"><img src="https://www.inviteme.ro/media/cache/square_thumb_800/uploads/66e8590231199/66e85e63077ae.jpg" alt="" /></div> */}

                    <p>Dacă ai ajuns aici înseamnă că țin la tine și m-aș bucura enorm dacă ai fi alături de mine într-o zi atât de specială!</p>
                </div>
                <div className={style.row} data-box="boxes">
                    <div className={style.row} data-box="parinti">
                        {/* <div className="col-md-12 text-center animate-box fadeInUp animated" data-animate-effect="fadeInUp"> */}
                        <span className={style.label}>Dragii mei parinti</span>
                        <span className={style.value}>Monica &amp; Eduard</span>
                        {/* </div> */}
                    </div>

                    <div className={style.row} data-box="nasi">
                        {/* <div className="col-md-12 text-center animate-box fadeInUp animated" data-animate-effect="fadeInUp"> */}
                        <span className={style.label}>Nașii</span>
                        <span className={style.value}>Alexandra si Flavius</span>
                        {/* </div> */}
                    </div>

                    <div className={style.row} data-box="mosi">
                        {/* <div className="col-md-12 text-center animate-box fadeInUp animated" data-animate-effect="fadeInUp"> */}
                        <span className={style.label}>Moșii</span>
                        <span className={style.value}>Oana si Alex</span>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
