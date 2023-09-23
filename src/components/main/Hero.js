/**
 * The compent of Hero
 * The description of restaurant is from Chat-GPT.
 */
export default function Hero() {
    return(
        <section className="bg-pjgreen pb-3 lg:max-h-96">
            <section className="mx-3 pt-6 grid grid-cols-1 lg:mx-36 lg:mt-3 lg:grid-cols-3">
                <section className="text-left mb-5">
                    <h1 className="my-5 font-markazi font-medium text-6xl text-pjyellow text-left">
                        Little Lemon
                    </h1>
                    <h2 className="my-5 font-markazi text-4xl text-pjorange">
                        Chicago
                    </h2>
                    <article className="mb-5 text-left">
                        <p className="font-karla text-pjgray">
                            Step into a world of culinary excellence at Little Lemon, where every dish is a masterpiece waiting to be savored..
                        </p>
                    </article>
                    <button className="font-karla text-lg text-pjgray bg-pjyellow w-1/2 h-12 rounded-xl hover:outline-none hover:shadow-outline hover:bg-pjorange">Reserve a table</button>
                </section>
                <section className="flex justify-between flex-nowrap lg:mt-10 lg:col-start-3">
                    <img className="max-w-full h-auto rounded-xl aspect-square " src="image/restauranfood.jpg" alt="restaurant food"/>
                </section>
            </section>
        </section>
    )
}