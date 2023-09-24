/**
 * The component of options
 */
export default function FormOption(props) {
    return (
        <>
            {props.lst.map((item) => {
                return (<option key={item.toLowerCase()}>{item}</option>)
            })
            }
        </>
    )
}