import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Components/Header";
import Mainpage from './Components/Mainpage/Mainpage';
import Footer from "./Components/Footer/Footer";
// import ContactForm from './Components/ContactForm/ContactForm';




export default function Home() {
  return (
    <main>
      <Header />
      {/* <ContactForm/> */}
      <Mainpage />
      <Footer />
    </main>
  );
}
