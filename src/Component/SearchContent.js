import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {MovieContext} from '../Context'
import Loading from './Loading'
import NoResults from '../Component/noResults'





const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));




export default function SearchContent() {
  const classes = useStyles();

  const [onChange,onSubmit,userData,movies,loading,getDetails] = useContext(MovieContext)

  return (
    <React.Fragment>
      <CssBaseline />
      {loading?<Loading/>:movies.length === 0 || movies[0].length === 0?<NoResults/> :<main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {movies[0] && movies[0].map((card) => {
              let id = card.id
              return(
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`https://image.tmdb.org/t/p/w200${card.poster_path}`}
                    title={card.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                    </Typography>
                    <Typography>
                        {card.overview.slice(0,200)}...                    
                    <Button size="small" color="primary" onClick={()=>getDetails(id)} >
                    <Link to='/movie-details'>
                      View More
                      </Link>
                    </Button>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>)
              })}
          </Grid>
        </Container>
      </main>}
    </React.Fragment>
  );
}