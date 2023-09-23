/**
 * The component of About
 * There is 2 cols layout on larger screen, while only one on smaller screen.
 */
export default function About() {
    return (
        <section className="mx-3 my-5 pt-6 lg:mx-36 flex flex-wrap justify-between lg:flex-nowrap lg:my-32">
            <section className="text-left basis-full lg:basis-1/2">
                <h1 className="my-5 font-markazi font-medium text-6xl text-pjgreen text-left">
                    Little Lemon
                </h1>
                <h2 className="my-5 font-markazi text-4xl text-pjblack">
                    Chicago
                </h2>
                <article className="mb-5 text-left w-2/3">
                    <p className="font-karla text-pjblack">
                        Step into a world of culinary excellence at Little Lemon, where every dish is a masterpiece waiting to be savored..
                    </p>
                </article>
            </section>
            <section className="basis-full space-y-5 lg:basis-1/2 lg:relative">
                <section className="w-full aspect-[3-4] lg:absolute lg:top-12 lg:left-48 lg:w-72">
                    <img src="image/marioandadriana.jpg" alt="Mario and Adriana"></img>
                </section>
                <section className="w-full aspect-[3-4] lg:absolute lg:top-24 lg:w-72">
                    <img src="image/marioandadrianb.jpg" alt="Mario and Adriana another"></img>
                </section>
            </section>
        </section>
    )
}