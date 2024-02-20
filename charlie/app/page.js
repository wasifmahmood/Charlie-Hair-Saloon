import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.css';
// import Location from "./pages/Location/Location";
import Service from "./pages/Service/Service";
import ContactForm from "./Components/ContactForm/ContactForm";

export default function Home() {
  return (
    <main >
      <Header />
       {/* <Service/> */}
       <ContactForm/>
    </main>
  );
}
