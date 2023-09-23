import SpecialCard from "./SpecialCard"

/**
 * The specail food list.
 * The description of food is from Chat-GPT.
 */
const specialList = [
    {name:"Greek Salad", price: "$ 12.99", src: "image/greeksalad.jpg", description:"Indulge in the flavors of Greece with our refreshing Greek Salad, a symphony of fresh vegetables and creamy feta cheese. From Chatgpt."},
    {name:"Bruchetta", price: "$ 5.99", src: "image/bruchetta.jpg", description:"Elevate your appetizer game with our delectable bruschetta, a symphony of ripe tomatoes, fresh basil, and garlic on perfectly toasted bread."},
    {name:"Lemon Desert", price: "$ 5.00", src:"image/lemondesert.jpg", description:"Experience a burst of sunshine in every bite with our exquisite Lemon Dessert, a zesty and refreshing delight that's perfect for any occasion."},
]

/**
 * The componnet of Specials.
 * There are several cards on larger screen, and scrollable cards on smaller screen.
 */
export default function Specials() {
    return (
        <section className="mx-3 pt-6 lg:mx-36 lg:mt-20">
            <section className="flex flex-nowrap justify-between">
                <h2 className="w-1/6 font-karla font-medium text-3xl text-pjblack text-left">Specials</h2>
                <button className="px-2 font-karla text-lg text-pjgray bg-pjgreen rounded-xl lg:px-0 lg:w-1/6 lg:h-12 hover:outline-none hover:shadow-outline hover:bg-pjyellow">Online Menu</button>
            </section>
            <section>
                <SpecialCard lst={specialList}/>
            </section>
        </section>
    )
}