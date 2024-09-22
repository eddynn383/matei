import Image from "next/image";
import Matei from "@/public/assets/matei-2.jpg"
import style from "@/modules/sections.module.css"

const Story = () => {
    return (
        <section id="eveniment" className={style.section} data-title="eveniment">
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.image}>
                        <Image src={Matei} alt="Matei si Mama" />
                    </div>
                    <div className={style.text} data-animate-effect="fadeInRight">
                        <div className={style.title}>
                            <span>Te invit cu drag la</span>
                            <h2>Botezul meu.</h2>
                        </div>
                        <div className={style.description}>
                            <p>Mama și tata mi-au pregatit o petrecere de neuitat și mi-ar face o imensă plăcere să putem fi impreună în această zi.</p>
                            <p>Am auzit că vor veni zâne, zmei, prinți și prințese, spiriduși și unicorni. Sau poate e doar în imaginația mea :)</p>
                            <p>Indiferent, este prima mea petrecere și te aștept cu drag!</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Story;