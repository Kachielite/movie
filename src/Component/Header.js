import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Search from './Search'
import header from '../header.jpeg'

const useStyles = makeStyles((theme) => ({
  header: {
    fontFamily: 'Luckiest Guy',
    textShadow: '2px 2px #ff0000',
    fontSize:'1.6rem',
    textAlign:'center',
    color:'white',
    width:'100vw',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    backgroundImage: `url(${header})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

  },
  headerContent: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    width:'100vw',
    padding: theme.spacing(3),
  },
}));

export default function Header(){
  const classes = useStyles();


  return (
    <Paper className={classes.header}>
        <Grid container>
            <div className={classes.headerContent}>
                <h1>Movie Encyclopedia</h1>
            </div>
            <div className={classes.headerContent}>
                <Search/>
            </div>
        </Grid>
    </Paper>
  );
}
