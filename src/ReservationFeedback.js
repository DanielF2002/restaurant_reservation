export default function ReservationFeedBack(props) {
    return (
        <section>
            <h1>Thank you {props.name}  choosing us.</h1>
            <h2>We will see you at {props.time} on {props.date}.</h2>
        </section>
    )
}