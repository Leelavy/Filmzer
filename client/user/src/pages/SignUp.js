import React from 'react';
//Routing
import { Link } from 'react-router-dom';
//Styles
import styled from 'styled-components';
import { StyledMotionDiv } from '../styles/styles';
//Components
import Loader from '../components/Loader';
import CustomTextField from '../components/ui-elements/CustomTextField';
//Animation 
import { pageAnimation } from '../styles/animation';
//MUI Components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'red',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: 'white',
    backgroundColor: 'red',
    '&:hover': {
      transition: '0.2s',
      backgroundColor: '#c01717',
    }
  },
}));

const SignUp = () => {

  const classes = useStyles();

  return (
    <>
      <Loader />
      <StyledMotionDiv
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    id="firstName"
                    label="First Name"
                    autoComplete="fname"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    id="lastName"
                    label="Last Name"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    id="email"
                    label="Email Address"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    id="password"
                    label="Password"
                    autoComplete="current-password"
                    type="password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Sign Up
          </Button>
              <StyledLink to="/signin" variant="body2">
                {"Already have an account? Sign In"}
              </StyledLink>
            </form>
          </div>
        </Container>
      </StyledMotionDiv>
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export default SignUp;