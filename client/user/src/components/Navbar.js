import React from 'react';
//Routing
import { Link } from 'react-router-dom';
//Styles
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
//MUI Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: 100,
    top: 0,
    left: 0,
    width: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = ({ openDrawer, setOpenDrawer }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <StyledToolBar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <StyledMenuIcon />
          </IconButton>
          <Link to="/">
            <StyledLogo src="logo.png" alt="logo" />
          </Link>
          <StyledLoginButton component={Link} to={'/signin'} color="inherit">Sign In</StyledLoginButton>
        </StyledToolBar>
      </AppBar>
    </div>
  );
}

//Additional Styles
const StyledToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  background: #141414;
  height: 10%;
`;

const StyledLogo = styled.img`
  height: 40px;
`;

const StyledMenuIcon = styled(MenuIcon)`
  &:hover {
    transition: 0.5s;
    color: red;
  }
`;

const StyledLoginButton = styled(Button)`
  &:hover {
    transition: 0.5s;
    color: red;
  }
`;

export default Navbar;