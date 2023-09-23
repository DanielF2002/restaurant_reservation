/**
 * The Nav component.
 * It is in the center on small screen, as on the right corner on large screen.
 */
export default function Nav(props) {
    return (
        <nav className="w-full my-auto bg-pjyellow rounded-lg px-2 lg:bg-transparent lg:w-2/3">
            <ul className="list-none flex flex-wrap justify-between lg:flex-nowrap">
                {props.pages
                    .map((page) => {
                        return (
                            <li className="hover:bg-gray" key={page.key}>
                                <a className="font-karla text-pjblack text-lg antialiased underline drop-shadow-xl hover:text-xl hover:bg-pjgray hover:no-underline" href={page.link}>{page.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}