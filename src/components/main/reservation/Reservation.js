import ReservationForm from "./ReservationForm";
import Indications from "./Indications";
import { useEffect, useReducer } from "react";
import { fetchAPI } from "./mockApi";

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
 * 
 * Please note there is not a Main component so the availableTimes useState is here.
 */
export default function Reservation() {

    const fetchAvailableTime = (date) => {
        if (date && date !== undefined) {
            fetchAPI(date)
            .then((response) => dispatch({type:"update", status: "available", date: date, lst: [" "].concat(response)}))
            .catch((e, date) => dispatch({type:"update", status: "unavailable", date: date, lst: []}));
        }
    }

    useEffect(() => {
        fetchAvailableTime();
    }, []);

    const initTimes = {status: "empty", date: "", list:[]};

    function reducer(availableTimes, action) {
        switch (action.type) {
            case "update": return {status: action.status, date: action.date, lst: action.lst};
            case "fetch": {
                fetchAvailableTime(action.date);
                return availableTimes;
            }
            default: console.log(action);
        }
    }

    const [availableTimes, dispatch] = useReducer(reducer, initTimes);

    console.log(availableTimes);

    return (
        <>
            <div className="bg-pjorange lg:my-5 lg:py-10">
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
            </div>
            <div className="mx-3 lg:mx-36 lg:mb-10">
                <div className="my-auto lg:flex lg:justify-between">
                    <div className="mt-5 w-full lg:w-1/2">
                        {isSplit && <Indications />}
                        <ReservationForm availableTimes={availableTimes} dispatch={dispatch}/>
                    </div>
                    <div className="invisible h-0 lg:visible lg:h-auto lg:w-1/2 lg:flex lg:justify-center lg:items-center">
                        <div className="lg:w-80">
                            <img className="max-w-full h-auto rounded-xl opacity-70" src="image/restauranfood.jpg" alt="restaurant food"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}