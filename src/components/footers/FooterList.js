/**
 * The component is for the links list of Card in Footer .
 */
export default function FooterList(props) {
    return props.lst.map((item) => {
        return (
            <li key={item.key}>
                <a className="font-karla text-pjgreen antialiased underline drop-shadow-xl hover:text-xl hover:bg-pjgray hover:no-underline" href={item.link} target={item.newWindow ? "_blank" : "_self"} >{item.name}</a>
            </li>
        )
    }
    )
};