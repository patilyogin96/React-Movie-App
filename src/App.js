import { data } from "./data";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import React from "react";
// import movies from './components/reducers';
import { addMovies, setFAV } from "./components/actions";

import {StoreContext} from './index'

class App extends React.Component {

 

  componentDidMount(){
    const {movies , search} = this.props.store.getState();
    const {list, favourites , showFav} = movies;

    const {store} = this.props;

    console.log(store.getState);


    store.subscribe(()=>{
      // console.log("UPDATED");
      this.forceUpdate();
    })


    store.dispatch(addMovies(list))

    console.log("New State", this.props.store.getState());
  }

  isMovieFav = (movie) =>{

    const {movies} = this.props.store.getState();

    const {favourites} = movies
    
    const index = favourites.indexOf(movie);

    if(index !==-1){
      // found the movie
      return true

    }
    return false;


  }

  onChangeTab = (val) =>{

    this.props.store.dispatch(setFAV(val))

  }

  
  render() {

    const {movies , search} = this.props.store.getState();

    
    const {list, favourites , showFav} = movies;
    const displayMovies = showFav ? favourites : list


    // console.log("movies after render", this.props.store.getState());
    return (
      <div className="App">
        <Navbar search={search} />

        <div className="main">
          <div className="tabs">
            <div className="tab" onClick={()=>this.onChangeTab(false)}>Movies</div>
            <div className="tab" onClick={()=>this.onChangeTab(true)}>Favourites</div>
          </div>
        </div>

        <div className="list">
          {displayMovies.map((movie , index) => {
            // console.log(movie);
            return <MovieCard movie={movie} key={index} dispatch={this.props.store.dispatch} isMovieFav={this.isMovieFav(movie)}/>;
          })}
        </div>
      </div>
    );
  }
}

class AppWrapper extends React.Component{
  render(){
    return(
      <StoreContext.Consumer>
       {(store)=> <App store={store} />}
      </StoreContext.Consumer>
    )
  }
}

export default AppWrapper;
