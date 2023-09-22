const FooterListGenerate = (props) => {
    return props.lst.map((item) => {
        return (
            <li key={item.key}>
                <a href={item.link} target={item.newWindow? "_blank" : "_self"} >{item.name}</a>
            </li>
        )}
    )
};

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
    return (
        <footer>
            <div>
                <img src="/image/footer-logo.png" alt="little lemon logo" />
            </div>
            <div>
                <p>Doormat Navigation</p>
                <or>
                    <FooterListGenerate lst={props.pages}/>
                </or>
            </div>
            <div>
                <p>Contact</p>
                <or>
                    <FooterListGenerate lst={contacts}/>
                </or>
            </div>
                <p>Social Media Links</p>
                <or>
                    <FooterListGenerate lst={socialMediaLinks}/>
                </or>
            <div>

            </div>
        </footer>
    )
}