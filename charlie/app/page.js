import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header";
import Mainpage from "./Components/Mainpage/Mainpage"
import 'bootstrap/dist/css/bootstrap.css';
// import Location from "./pages/Location/Location";
// import Service from "./pages/Service/Service";
import About from "./pages/About/About";

export default function Home() {
  return (
    <main >
      <Header />
      <About/>
      {/* <Mainpage/> */}
      {/* <Footer/> */}
    </main>
  );
}
