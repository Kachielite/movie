import './App.css';
import Home from './PageComponent/Home'
import {Switch, Route} from 'react-router-dom';
import MovieDetails from './PageComponent/MovieDetails'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/movie-details' component={MovieDetails}/>
      </Switch>
    </div>
  );
}

export default App;
