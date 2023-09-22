

export default function Nav(props) {
    return (
        <nav className="nav">
            <or>
                {props.pages
                    .map((page) => {
                        return (
                            <li key={page.key}>
                                <a href={page.link}>{page.name}</a>
                            </li>
                        )
                    })
                }
            </or>
        </nav>
    )
}