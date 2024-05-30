import Footer from "./Footer.jsx";
import Quotes from "./Quotes2.jsx";
import Navbar from "./Navbar.jsx";
import "./App.css";
import Randomquotes from "./Randomquotes.json";

function App() {
  return (
    <>
      <Navbar />
      <Quotes Randomquotes={Randomquotes} />
      <Footer />
    </>
  );
}

export default App;
