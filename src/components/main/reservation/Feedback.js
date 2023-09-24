/**
 * This component will toggle the visible attribute
 * to show the result of reservation by given props.id.
 */
export default function FeedBack(props) {
    return (
        <section className={`${props.visible === 0 && "invisible"} h-24 text-left w-full ml-12 mt-5`}>
            <section className={`${props.visible === 2 && "invisible"} absolute h-18`}>
                <h1 className="font-markazi font-medium text-3xl text-pjyellow antialiased drop-shadow-xl">Thank you {props.name} for choosing us.</h1>
                <h2 className="font-markazi text-xl text-pjorange antialiased drop-shadow-xl">We will see you at {props.time} on {props.date}.</h2>
            </section>
            <section className={`${props.visible === 1 && "invisible"} absolute h-18`}>
                <h1 className="font-markazi font-medium text-3xl text-pjyellow antialiased drop-shadow-xl">Oop, something is wrong.</h1>
                <h2 className="font-markazi text-xl text-pjorange antialiased drop-shadow-xl">Please try again.</h2>
            </section>
        </section>
    )
}