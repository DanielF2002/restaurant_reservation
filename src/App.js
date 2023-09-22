//import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

const pages = ["Home", "About", "Menu", "Reservations", "Order online", "Login"];
const pagesToObj = pages.map((page) => {
  let key = page.replace(/\s/g, '').toLowerCase();
  let obj = {name: page, link: key, key: key, newWindow: false};
  return obj;
})


function App() {
  return (
    <div className="mt-3 lg:mt-10">
      <div className="m-3 lg:mx-10 lg:flex lg:flex-nowrap lg:justify-between">
        <Header />
        <Nav pages={pagesToObj} />
      </div>
      <Main />
      <Footer pages={pagesToObj} />
    </div>
  );
}

export default App;
