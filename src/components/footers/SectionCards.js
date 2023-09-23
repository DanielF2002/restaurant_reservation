import FooterList from "./FooterList"

/**
 * The component is for the Cards in Footer .
 */
export default function SectionCards(props) {
    return props.sectionList.map((section) => {
        return (
            <section key={`section-cards-${section.name.replace(/\s/g, '').toLowerCase()}`} className="w-1/2 lg:max-w-1/8 p-10">
                <h4 className="font-karla font-bold text-lg text-pjblack text-center lg:text-left">{section.name}</h4>
                <ul className="mt-3 text-center lg:text-left">
                    <FooterList lst={section.lst}/>
                </ul>
            </section>
        )}
    )
}