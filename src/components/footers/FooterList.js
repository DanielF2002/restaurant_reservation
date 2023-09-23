/**
 * The component is for the links list of Card in Footer .
 */
export default function FooterList(props) {
    return props.lst.map((item) => {
        let property = {className:
            "font-karla text-pjgreen antialiased underline drop-shadow-xl hover:text-xl hover:bg-pjgray hover:no-underline",
        }
        if (item.newWindow) {
            property = {
                ...property,
                target: "_blank",
                rel: "noopener noreferrer",
            }
        }

        return (
            <li key={item.key}>
                <a {...property}>${item.name}</a>
            </li>
        )
    }
    )
};