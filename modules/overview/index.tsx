import Image from "next/image";
import style from "@/modules/sections.module.css"
import simon from "@/public/assets/simba-on-clif.png"

const Overview = () => {

    return (
        <section id="acasa" className={style.section} data-title="acasa">
            {/* <div className="overlay"></div> */}
            <div className={style.container}>
                <div className={style.row} data-title="image">
                    <Image src={simon} alt="simon" />
                </div>
                <div className={style.row} data-title="name">
                    <div className={style.caption}>
                        <h1 className={style.name} data-animate-effect="fadeInUp">Matei</h1>
                        <p className={style.date} data-animate-effect="fadeInUp">5 Octombrie 2024 – Craiova, România</p>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-md-12">
                        <div className="arrow bounce text-center">
                            <a href="#couple"> <i className="ti-heart"></i> </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Overview;