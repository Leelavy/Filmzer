//Components
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import Loader from './components/Loader';
//Pages
import Home from './pages/Home';
//Socket
import io from "socket.io-client";
const socket = io.connect("http://localhost:8080");
//Styles

const App = () => {

  return (
    <>
      <Loader />
      <HeaderNav />
      <Home />
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;
