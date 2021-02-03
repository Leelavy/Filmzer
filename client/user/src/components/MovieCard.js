import React from "react";
//styles
import styled from 'styled-components';
import { StyledButton } from '../styles/styles';
//MUI Components
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    borderRadius: '0',
    transition: 'transform .2s',
    border: '0.5px solid transparent',
    backgroundColor: '#141414',
    '&:hover': {
      transform: 'scale(1.05)',
    }
  },
  media: {
    height: 280,
  },
  content: {
    padding: '1rem 1.2rem',
    height: 120,
    background: '#202020',
    color: '#d4d4d4',
  },
  actions: {
    padding: '1rem 1.2rem',
    background: '#202020',
    color: 'white',
  },
});

const MovieCard = ({ movie }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt={`${movie.movieTitle}`}
          height="140"
          image={`${movie.imageUrl}`}
          title={`${movie.movieTitle}`}
        />
        <CardContent className={classes.content}>
          <StyledHeaderCardDiv>
            <Typography gutterBottom variant="h5" component="h2" align="left">
              {`${movie.movieTitle}`}
            </Typography>
            <div>Rating</div>
          </StyledHeaderCardDiv>
          <Typography variant="body2" component="p" align="left">
            {`${movie.description.replace(/^(.{120}[^\s]*).*/, "$1")}...`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <StyledButton size="small" color="inherit">
          REVIEWS
        </StyledButton>
        <StyledButton size="small" color="inherit">
          WATCH TRAILER
        </StyledButton>
      </CardActions>
    </Card>
  );
}

const StyledHeaderCardDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  div {
    padding: 0.3rem 0.5rem 0.3rem 0.5rem;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
    background-color: #141414;
  }
`;

export default MovieCard;
