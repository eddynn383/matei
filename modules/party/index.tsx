import style from "@/modules/sections.module.css"

const Party = () => {

    return (
        <section className={style.section} data-title="party">
            <div className={style.row}>
                <div className={style.label}>
                    <p>Prima mea petrecere!</p>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.value}>
                    <h2>5 Octombrie 2024</h2>
                </div>
            </div>
        </section>
    );
};

export default Party;
