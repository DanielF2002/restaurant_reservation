const imgs = [
    {name: "picture of bruchetta", src: "image/bruchetta.jpg"},
    {name: "picture of lemon desert", src: "image/lemondesert.jpg"},
    {name: "picture of greek salad", src: "image/greeksalad.jpg"},
]
// TODO fix pic, fix mobile width, fix mobile pic scroll
export default function Reservation() {
    return (
        <section className="bg-pjgreen">
            <section className="p-3 lg:px-10 lg:pt-10 text-left">
                <h2 className="font-markazi font-medium text-6xl text-pjyellow">
                    Welcome to Little Lemon
                </h2>
                <h3 className="font-markazi text-4xl text-pjorange">
                    Reserve a table
                </h3>
            </section>
            <section className="p-3 lg:px-10 lg:pb-10 flex justify-between flex-nowrap">
                <article className="basis-1/2 lg:basis-1/4 text-left">
                    <p className="font-karla text-pjgray">
                        Treat your palate to our delightful, gourmet creations served in a welcoming and charming setting.
                    </p>
                </article>
                <aside className="basis-1/2 flex flex-nowrap lg:justify-between lg:basis-2/3">
                    {
                        imgs.map((img) => {
                            return (
                                <section className="w-60"><img class="max-w-full h-auto rounded-xl" src={img.src} alt={img.name} /></section>
                            )
                        })
                    }
                </aside>
            </section>
        </section>
    )
}