import './App.css';
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
    <div className="App">
      <Header />
      <Nav pages={pagesToObj} />
      <Main />
      <Footer pages={pagesToObj} />
    </div>
  );
}

export default App;
