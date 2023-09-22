export default function Nav(props) {
    return (
        <nav className="w-full my-auto lg:w-1/2">
            <ul className="list-none flex flex-wrap justify-between lg:flex-nowrap">
                {props.pages
                    .map((page) => {
                        return (
                            <li className="hover:bg-gray" key={page.key}>
                                <a className="font-karla text-pjblack text-lg antialiased underline drop-shadow-xl hover:text-xl hover:bg-pjgray" href={page.link}>{page.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}