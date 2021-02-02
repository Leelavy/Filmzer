//Components
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';
//Pages
import Home from './pages/Home';
import Movies from './pages/Movies';
import Reviews from './pages/Reviews';
import About from './pages/About';
//Router
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//animation - detecs presence of component when they dismount
import { AnimatePresence } from 'framer-motion';
//Socket
import io from "socket.io-client";
const socket = io.connect("http://localhost:8080");

const App = () => {

  return (
    <BrowserRouter>
      <HeaderNav />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/about" component={About} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
