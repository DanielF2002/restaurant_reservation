import Hero from "./Hero"
import Specials from "./specials/Specials"
import Testimonials from "./testimonial/Testimonials"
import About from "./About"
import Reservation from "./reservation/Reservation";

/**
 * The Main component.
 */
export default function Main() {
    return (
        <main>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
            <Reservation />
        </main>
    )
}