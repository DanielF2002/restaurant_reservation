const FooterListGenerate = (props) => {
    return props.lst.map((item) => {
        return (
            <li key={item.key}>
                <a className="font-karla text-pjgreen antialiased underline drop-shadow-xl hover:text-xl hover:bg-pjgray" href={item.link} target={item.newWindow? "_blank" : "_self"} >{item.name}</a>
            </li>
        )}
    )
};

const SectionListGenerate = (props) => {
    return props.sectionList.map((section) => {
        return (
            <section className="w-1/2 lg:max-w-1/8 p-10">
                <h4 className="font-karla font-bold text-lg text-pjblack text-left">{section.name}</h4>
                <ul className="mt-3 text-left">
                    <FooterListGenerate lst={section.lst}/>
                </ul>
            </section>
        )}
    )
}

const contacts = [
    {name: "Address", key: "address", link: "https://maps.app.goo.gl/G4T1MPbhjSjQvtS38", newWindow: true},
    {name: "Phone number", key: "phonenumber", link: "tel:123-456-7890", newWindow: false},
    {name: "Email", key: "email", link: "mailto:little.lemon@email.com", newWindow: true},
]

const socialMediaLinks = [
    {name: "Facebook", key: "facebook", link: "https://www.facebook.com", newWindow: true},
    {name: "Twitter", key: "twitter", link: "https://www.twitter.com", newWindow: true},
    {name: "Instagram", key: "instagram", link: "https://www.instagram.com", newWindow: true},
]


export default function Footer(props) {

    const sections = [
        {name: "Doormat Navigation", lst: props.pages},
        {name: "Contact", lst: contacts},
        {name: "Social Media Links", lst: socialMediaLinks},
    ]

    return (
        <footer className="m-3 flex flex-wrap lg:mx-10 lg:flex-nowrap lg:justify-center">
            <section className="w-1/2 flex justify-center items-center">
                <img className="w-24" src="/image/footer-logo.png" alt="little lemon logo" />
            </section>
            <SectionListGenerate sectionList={sections} />
        </footer>
    )
}