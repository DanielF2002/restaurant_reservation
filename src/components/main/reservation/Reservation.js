import ReservationSubPage from "./ReservationSubPage"

/**
 * The form filling is splitted into 2 parts when set to true.
 */
const isSplit = false;
/**
 * The list of pictures.
 */
const imgs = [
    {name: "bruchetta", src: "image/bruchetta.jpg"},
    {name: "lemon desert", src: "image/lemondesert.jpg"},
    {name: "greek salad", src: "image/greeksalad.jpg"},
]
/**
 * The component is the Reservation.
 * Mainly, there is only hero page in the component and in the end there is the rest component called SubPage.
 * There is 2 cols on smaller screen and 4 cols on larger screen.
 * The description of restaurant is from Chat-GPT.
 */
export default function Reservation() {
    return (
        <>
            <section className="bg-pjorange lg:my-5 lg:py-10">
                <section className="mx-3 pt-6 lg:mx-36">
                    <h2 className="font-markazi font-medium text-6xl text-pjgreen text-left">
                        Welcome to Little Lemon
                    </h2>
                    <section className="py-5 flex justify-between flex-nowrap">
                        <article className="space-y-4  basis-1/2 lg:basis-1/4 text-left">
                            <h3 className="font-markazi text-4xl text-pjgray">
                                Reserve a table
                            </h3>
                            <p className="font-karla text-pjgray">
                                Treat your palate to our delightful, gourmet creations served in a welcoming and charming setting.
                            </p>
                        </article>
                        <aside className="basis-1/2 flex gap-2 w-full overflow-scroll lg:overflow-hidden lg:p-0 lg:gap-5 lg:justify-between lg:basis-2/3">
                            {
                                imgs.map((img) => {
                                    return (
                                        <section key={img.name} className="flex justify-center items-center flex-shrink-0  basis-5/6 lg:basis-1/4 lg:flex-grow "><img className="w-full h-auto rounded-xl aspect-[4/3]" src={img.src} alt={img.name} /></section>
                                    )
                                })
                            }
                        </aside>
                    </section>
                </section>
            </section>
            <ReservationSubPage isSplit={isSplit}/>
        </>
    )
}