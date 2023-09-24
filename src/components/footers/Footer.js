import SectionCards from "./SectionCards";

/**
 * The contacts links.
 */
const contacts = [
    {name: "Address", key: "address", link: "https://maps.app.goo.gl/5mwPAR9CDwKaX9bW9"},
    {name: "Phone number", key: "phonenumber", link: "tel:123-456-7890"},
    {name: "Email", key: "email", link: "mailto:little.lemon@email.com"},
]

/**
 * The social media links.
 */
const socialMediaLinks = [
    {name: "Facebook", key: "facebook", link: "https://www.facebook.com"},
    {name: "Twitter", key: "twitter", link: "https://www.twitter.com"},
    {name: "Instagram", key: "instagram", link: "https://www.instagram.com"},
]

/**
 * The Footer component.
 */
export default function Footer(props) {
    const sections = [
        {name: "Doormat Navigation", lst: props.pages},
        {name: "Contact", lst: contacts},
        {name: "Social Media Links", lst: socialMediaLinks},
    ]

    return (
        <footer className="m-3 flex flex-wrap lg:mx-36 lg:flex-nowrap lg:justify-center">
            <section className="w-1/2 flex justify-center items-center">
                <img className="w-24" src="/image/footer-logo.png" alt="little lemon logo" />
            </section>
            <SectionCards sectionList={sections} />
        </footer>
    )
}