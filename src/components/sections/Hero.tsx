import rocketdab from "../../assets/rocketdab.png";

export default function Hero(){
    return (
        <section id="hero" className="flex flex-col-reverse sm:flex-row justify-center p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
            <article className=" sm:w-1/2">
                <h2 className=" max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left mb-12 text-slate-900 dark:text-white">
                    We boldy go <span className="text-indigo-700 dark:text-indigo-300">where no rocket</span> has gone before...
                </h2>
                <p className=" max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                    We are building rockets for the next century today. From the moon to Mars, Jupiter and beyond...
                </p>
                <p className=" max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                    think Acme Rockets
                </p>
            </article>
            <img className=" w-1/2 floating " alt="rocket dab" src={rocketdab}/>
        </section>
    )
}
