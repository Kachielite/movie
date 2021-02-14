import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Search from '../search.png'

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      // marginTop: theme.spacing(8),
      padding: theme.spacing(6, 0),
    //   height:"50vh",
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      
    },
    image:{
        maxWidth:"40vw",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
  }));

export default function NoResults() {
    const classes = useStyles();

  
    return (
      <div className={classes.root}>
        <Container maxWidth="lg">
        <Typography align="center" gutterBottom>
            <h2>"No results found"</h2>
          </Typography>
        </Container>
        <div className={classes.image}>
        <img src={Search} alt="search" style={{width:'80vw'}}/>
        </div>
      </div>
    );
  }
