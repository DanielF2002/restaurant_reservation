import RateStars from "./RateStars"

export default function RateCards(props) {
    return (
        <section className="my-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {
                props.lst.map((item)=>{
                    return (
                        <article key={item.name} className="bg-pjorange grid grid-cols-3 p-2 pb-8 space-x-2 rounded-lg">
                            <h5 className="my-3 content-center font-karla font-medium text-lg text-pjgray drop-shadow">Rating</h5>
                            <RateStars count={item.star} />
                            <div className="flex items-center">
                                <div className="w-24 h-24 rounded-full">
                                    <img className="w-full aspect-square rounded-full" src={item.src} alt={item.name}/>
                                </div>
                            </div>
                            <div className="row-span-2 col-span-2 text-left font-karla bg-pjblack bg-opacity-60 text-pjgray p-2 rounded-lg">
                                <p>{item.content}</p>
                            </div>
                            <h6 className="my-3 content-center font-karla text-pjgray drop-shadow-sm">{item.name}</h6>
                        </article>
                    )
                })
            }
        </section>
    )
}