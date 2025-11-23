import About from "./sections/About";
import Contact from "./sections/Contact";
import Facility from "./sections/Facility";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Navbar from "./sections/Navbar";
import "./index.css";
import Testimony from "./sections/Testimony";

function App() {
  return (
    <div className="inset-0 -z-10 bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Navbar />
      <Header />
      <About />
      <Facility />
      <Testimony />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
