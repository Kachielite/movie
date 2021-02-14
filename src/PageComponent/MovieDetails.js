import React,{useContext, useEffect,useState} from 'react';
import {Redirect} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import {MovieContext} from '../Context'
import Loading from '../Component/Loading'



const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: '30rem',
    width:'20rem'
  },
  cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(4, 0, 3),
    display: 'flex',
    justifyContent: 'center',
  },
  movieDetails: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection:'column'
  },
  noWrap:{
    padding: theme.spacing(1, 0, 1),
    display: 'flex',
    flexDirection:'row'
  },
  productionCard: {
    height: '100%',
    width:'max-content',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    // paddingTop: '200%', // 16:9
    height: '20rem',
    width:'10rem'
    
    
  },
  cardContent: {
    flexGrow: 1,
  },

  productionCardCompany: {
    height: '100%',
    width:"16rem",
    display: 'flex',
    flexDirection: 'column',
  },
  cardMediaCompany: {
    height: '10rem',
    width:'16rem'
   
  },
}));


export default function Pricing() {
  const classes = useStyles();

  const [onChange,onSubmit,userData,movies,loading,getDetails,movieDetails,credits] = useContext(MovieContext)


  let data = movieDetails
  let getCredits = credits

 

  


  return (
    <React.Fragment >
      <CssBaseline />
      {loading?<Loading/>:(movieDetails.length === 0 || credits.length === 0)?<Redirect to="/"/>:
      <div><AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Button color="primary" variant="outlined" className={classes.link}>
            <Link to='/'>
            Back Home
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w200${data[0].poster_path}`}
          title={data[0].title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data[0].title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
          <Typography color="textSecondary">
                  <h3>Cast: </h3>   
          </Typography>
          <Grid container spacing={4}>
              {getCredits[0].map(item=>{
                return(
                  <Grid item key={item.id} xs={6} sm={6} md={4}>
                  <Card className={classes.productionCard}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                      title={item.name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="subtitle2" color="textSecondary">
                        {item.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Grid>
                )
                })}
          </Grid> 
        </Container>  
      <Container  maxWidth="sm" component="main" className={classes.movieDetails} >
          <Grid >
              <div className={classes.cardDetails}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <h4>Overview</h4>
                    {data[0].overview}
                  </Typography>
              </div>
          </Grid>  
          <Grid>
              <div className={classes.noWrap}>
                  <Typography variant="h7" color="textSecondary">
                  <h4>Release Date: </h4>    
                  </Typography>&nbsp;
                  <Typography variant="subtitle2" color="textSecondary">
                  {data[0].release_date}
                  </Typography>
              </div>
              <div className={classes.noWrap}>
                  <Typography variant="h7" color="textSecondary">
                  <h4>Genre: </h4>   
                  </Typography>&nbsp;
                  {data[0].genres.map(item=>{
                      return(          
                        <Typography variant="subtitle2" color="textSecondary">
                        {item.name},
                        </Typography>
                      )})}
              </div>
              <div className={classes.noWrap}>
                  <Typography variant="h7" color="textSecondary">
                  <h4>Rating: </h4>    
                  </Typography>&nbsp;
                  <Typography variant="subtitle2" color="textSecondary">
                  {data[0].vote_average}/10
                  </Typography>
              </div>
          </Grid>

          <Container className={classes.cardGrid} maxWidth="md">
          <Typography variant="h7" color="textSecondary">
                  <h4>Production Companies: </h4>    
          </Typography>
          <Grid container spacing={4}>
              {data[0].production_companies.map(item=>{
                return(
                  <Grid item key={item.id} xs={12} sm={12} md={6}>
                  <Card className={classes.productionCardCompany}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMediaCompany}
                      image={`https://image.tmdb.org/t/p/w200${item.logo_path}`}
                      title={item.name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="subtitle2" color="textSecondary">
                        {item.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Grid>
                )
                })}
          </Grid> 
        </Container>  
      </Container>
        </div>}
    </React.Fragment>
  );
}