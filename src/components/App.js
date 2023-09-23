import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

/**
 * The nav menu, used for Nav and Footer.
 */
const pages = ["Home", "About", "Menu", "Reservations", "Order online", "Login"];
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
    <div className="mt-3 lg:mt-10">
      <div className="m-3 lg:mx-36 lg:flex lg:flex-nowrap lg:justify-between">
        <Header />
        <Nav pages={pagesToObj} />
      </div>
      <Main />
      <Footer pages={pagesToObj} />
    </div>
  );
}

export default App;
