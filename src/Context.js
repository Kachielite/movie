import React,{Component} from 'react';
import axios from 'axios';



const MovieContext = React.createContext()

class MovieProvider extends Component{


    constructor(props){
        super(props);
        this.state={
            userRequest:'',
            userData:'',
            movies:[],
            loading: false,
            movieDetails:[],
            credits:[],
            id:''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        
    }

    onChange(e){
        this.setState({userRequest:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        this.searchMovie()
        this.setState({userRequest:''})
        
    }

    apiKey = '152b2e4a7d9b98407e4656d8fe2006ca'
    
    searchMovie = async () =>{
        this.setState({loading:true})

        let query = this.state.userRequest
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
        const res = await axios.get(url)
        let results = res.data.results.slice(0,9)
        this.setState({movies: [results]});
        

        } catch (error) {
            console.log('Error message: ', error);

        } finally {
            this.setState({loading:false})
        }

        
        
    }


    getDetails = async (id)=>{
        this.setState({loading:true})
        this.setState({id:id})
        //Get movie details
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=152b2e4a7d9b98407e4656d8fe2006ca&language=en-US`;
        //Get movie credits
        const url2 = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.apiKey}&language=en-US`;

        try {
        //movie details response
        const res = await axios.get(url)
        //movie credits response
        const res2 = await axios.get(url2)
 
        this.setState({movieDetails: [res.data]});
        let results = res2.data.cast.slice(0,9)
        this.setState({credits: [results]});
        

        } catch (error) {
            console.log('Error message: ', error);

        } finally {
            this.setState({loading:false})
        }
        
        
    }

    popularMovies = async ()=>{
        this.setState({loading:true})
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2021`;
        
        try {
        const res = await axios.get(url)


        this.setState({movies:[res.data.results.slice(0,9)]});

        } catch (error) {
            console.log('Error message: ', error);

        } finally {
            this.setState({loading:false})
        }
    }


 
   componentDidMount(){
        this.popularMovies()
    }



    render(){
        return(
           <MovieContext.Provider value={[this.onChange,this.onSubmit,this.state.userRequest,this.state.movies,this.state.loading, this.getDetails, this.state.movieDetails, this.state.credits]}>
              {this.props.children}
          </MovieContext.Provider> 
        )
    }
}


export {MovieContext, MovieProvider}


