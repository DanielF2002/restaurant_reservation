const imgs = [
    {name: "picture of bruchetta", src: "image/bruchetta.jpg"},
    {name: "picture of lemon desert", src: "image/lemondesert.jpg"},
    {name: "picture of greek salad", src: "image/greeksalad.jpg"},
]

export default function Reservation() {
    return (
        <section>
            <article>
                <h2>
                    Welcome to Little Lemon
                </h2>
                <h3>
                    Reserve a table
                </h3>
                <p>
                    Treat your palate to our delightful, gourmet creations served in a welcoming and charming setting.
                </p>
            </article>
            <aside>
                {
                    imgs.map((img) => {
                        return (
                            <img src={img.src} alt={img.name} />
                        )
                    })
                }
            </aside>
        </section>
    )
}