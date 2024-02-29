import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.css';
// import Location from "./pages/Location/Location";
import Service from "./pages/Service/Service";

export default function Home() {
  return (
    <main>
      <Header />
       <Service/>
    </main>
  );
}
