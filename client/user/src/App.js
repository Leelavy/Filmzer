import React, { useState } from 'react';
//Components
import Navbar from './components/Navbar';
import DrawerMenu from './components/DrawerMenu';
import Footer from './components/Footer';
//Pages
import Home from './pages/Home';
import Movies from './pages/Movies';
import Reviews from './pages/Reviews';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
//Styles
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';
//Router
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Socket
import io from "socket.io-client";
const socket = io.connect("http://localhost:8080");

const App = () => {

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <StyledContainer>
        <DrawerMenu openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <Navbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <StyledContentContainer>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/reviews" component={Reviews} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/SignUp" component={SignUp} />
          </Switch>
        </StyledContentContainer>
        <Footer />
      </StyledContainer>
    </BrowserRouter>
  );
}

const StyledContainer = styled.div` 
  text-align: center;
  position: relative;
  justify-content: center;
  background: #141414;
  height: 100vh;
  color: white;
`;

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1b1b1b;
  padding: 5rem 0 5rem 0;
  min-height: 84.5%;
  width: 100%;
  color: white;

`;

export default App;
