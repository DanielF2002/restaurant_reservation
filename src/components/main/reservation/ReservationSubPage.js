import Indications from "./Indications";
import ReservationForm from "./ReservationForm";

/**
 * The component of page of form.
 */
export default function ReservationSubPage(props) {
    return (
        <section className="mx-3 lg:mx-36">
            <section className="my-auto lg:flex lg:justify-between">
                <section className="mt-5 w-full lg:w-1/2">
                    {props.isSplit && <Indications />}
                    <ReservationForm />
                </section>
                <section className="invisible h-0 lg:visible lg:h-auto lg:w-1/2 lg:flex lg:justify-center lg:items-center">
                    <section className="lg:w-80">
                        <img className="max-w-full h-auto rounded-xl opacity-70" src="image/restauranfood.jpg" alt="restaurant food"/>
                    </section>
                </section>
            </section>
        </section>
    )
}
