import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Components/Header";
import Mainpage from './Components/Mainpage/Mainpage';
import Footer from "./Components/Footer/Footer";



export default function Home() {
  return (
    <main>
      <Header />
      <Mainpage />
      <Footer />
    </main>
  );
}
