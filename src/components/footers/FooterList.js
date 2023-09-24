import { Link } from "react-router-dom";
/**
 * The component is for the links list of Card in Footer .
 */
export default function FooterList(props) {
    return props.lst.map((item) => {
        /* Return the className */
        let property = {className:
            "font-karla text-pjgreen antialiased underline drop-shadow-xl hover:text-xl hover:bg-pjgray hover:no-underline",
        }
        /* Return if the link is a external link */
        const isExternal = (l) => {
            const h = l.toLowerCase();
            const isHttp = h.startsWith("http");
            const isMail = h.startsWith("mailto");
            const isTel = h.startsWith("tel")
            return isHttp || isMail || isTel;
        }

        if (isExternal(item.link)) {
            property = {
                ...property,
                target: "_blank",
                rel: "noopener noreferrer",
                href: item.link,
            }
            return (
                <li key={item.key}>
                    <a {...property}>{item.name}</a>
                </li>
            )
        } else {
            property = {
                ...property,
                to: item.link,
            }
            return (
                <li key={item.key}>
                    <Link {...property}>{item.name}</Link>
                </li>
            )
        }
    }
    )
};