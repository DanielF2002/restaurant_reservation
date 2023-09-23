/**
 * The Card component in Special.
 */
export default function SpecialCard(props) {
    return (
        <section className="flex w-full gap-5 overflow-scroll lg:overflow-hidden lg:p-0 lg:gap-20 lg:justify-between lg:basis-full">
            {
                props.lst.map((item)=>{
                    let key = item.name.replace(/\s/g, '').toLowerCase();
                    return (
                        <section key={`special-card-${key}`} className="w-5/6 mt-8 flex-shrink-0 space-y-0 lg:flex-1 lg:flex-grow">
                            <section>
                                <img className="w-full aspect-[4/3] rounded-t-xl" src={item.src} alt={item.name}/>
                            </section>
                            <section className="bg-pjgray space-y-5 py-5">
                                <section className="mx-3 flex flex-nowrap justify-between">
                                    <h7 className="font-karla font-bold text-lg text-pjblack drop-shadow">{item.name}</h7>
                                    <p className="font-karla font-medium text-pjorange drop-shadow">{item.price}</p>
                                </section>
                                <section className="mx-3 text-left">
                                    <p className="font-karla text-gray-500">{item.description}</p>
                                </section>
                                <section className="mx-3 flex flex-nowrap">
                                    <p className="font-karla font-bold text text-pjblack drop-shadow">
                                        Order a delivery
                                        <button className="ml-2 pt-1" type="button">
                                            <img className="h-4 w-4" src="image/transport.png" alt="button" border="0" />
                                        </button>
                                    </p>
                                    <img/>
                                </section>
                            </section>
                        </section>
                    )
                })
            }
        </section>
    )
}