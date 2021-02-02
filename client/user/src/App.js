//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//Pages
import Home from './pages/Home';
import Movies from './pages/Movies';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
//Styles
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';
//Router
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//animation - detecs presence of component when they dismount
import { AnimatePresence } from 'framer-motion';
//Socket
// import io from "socket.io-client";
// const socket = io.connect("http://localhost:8080");

const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <StyledContainer>
        <Navbar />
        <StyledContentContainer>
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/movies" component={Movies} />
              <Route exact path="/reviews" component={Reviews} />
              <Route exact path="/about" component={About} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </AnimatePresence>
        </StyledContentContainer>
        <Footer />
      </StyledContainer>
    </BrowserRouter>
  );
}

const StyledContainer = styled.div`
  position: relative;
  background: #141414;
  height: 100vh;
  color: white;
`;

const StyledContentContainer = styled.div`
  background: #1b1b1b;
  min-height: 80vh;
  color: white;
`;

export default App;
