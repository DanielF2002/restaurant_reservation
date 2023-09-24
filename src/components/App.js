import Header from './Header';
import Nav from './Nav';
import Hero from "./main/Hero"
import Specials from "./main/specials/Specials"
import Testimonials from "./main/testimonial/Testimonials"
import About from "./main/About"
import Reservation from "./main/reservation/Reservation";
import OrderOnline from './main/OrderOnline';
import Footer from './footers/Footer';
import { Routes, Route } from "react-router-dom";

/**
 * The nav menu, used for Nav and Footer.
 */
const pages = ["Home", "About", "Highlight", "Rate", "Order", "Reservation"];
/**
  Transfer the pages to a obj.
 */
const pagesToObj = pages.map((page) => {
  let key = page.replace(/\s/g, '').toLowerCase();
  let obj = {name: page, link: key, key: key, newWindow: false};
  return obj;
})

/**
 * The main app component.
 * 
 * Adding a div to combination Header and Nav is to fit the responsive layout.
 * The Header and Nav are be displayed in one line on lg device,
 * and in 2 lines on smaller screen.
 */

function App() {
  return (
    <div id="app">
      <div className="m-3 space-y-2 lg:mx-36 lg:flex lg:flex-nowrap lg:justify-between">
        <Header />
        <Nav pages={pagesToObj} />
      </div>
      <main>
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/home" element={<Hero />}></Route>
        <Route path="/highlight" element={<Specials />}></Route>
        <Route path="/rate" element={<Testimonials />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/order" element={<OrderOnline />}></Route>
      </Routes>
      </main>
      <Footer pages={pagesToObj} />
    </div>
  );
}

export default App;
