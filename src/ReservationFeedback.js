export default function ReservationFeedBack(props) {
    return (
        <section className="m-3 p-10 text-left w-full lg:m-10">
            <h1 className="py-10 font-markazi font-medium text-6xl text-pjyellow">Thank you {props.name} choosing us.</h1>
            <h2 className="py-10 font-markazi text-4xl text-pjorange">We will see you at {props.time} on {props.date}.</h2>
        </section>
    )
}