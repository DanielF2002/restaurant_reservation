/**
 * The component for the error message of the Form.
 */
export default function ErrorInfo(props) {
    return (
        <p className="ml-3 font-karla text-left text-red-500 drop-shadow">{props.info}</p>
    )
}