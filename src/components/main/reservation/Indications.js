/**
 * The list of form filling stages.
 */
const indicationHints = ["Please tell us your request", "Please give us some essential information", "You are done."];

/**
 * The component is for 3 buttons and a text line for indicating the progresss of form filling.
 */
export default function Indication() {
    return (
        <section className="mb-3">
            <section className="flex flex-nowrap w-full justify-between mb-4">
                {indicationHints.map((hint, index) => {
                    return (
                        <button key={`indicate-button-key-${index}`} className={`font-karla text-sm drop-shadow-sm text-pjblack w-24 bg-pjorange rounded-lg shadow ${index < 2 && "hover:outline-none hover:shadow-outline hover:bg-pjyellow"}`} id={`indicate-button-key-${index}`} name={`indicate-button-key-${index}`} type="button">{index + 1}</button>
                    )
                })}
            </section>
            <p className="font-karla text-left text-pjgreen drop-shadow">{indicationHints[0]}</p>
        </section>
    )
}