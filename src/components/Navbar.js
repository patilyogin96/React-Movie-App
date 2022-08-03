import React, { Component } from 'react'
import { StoreContext } from '..';
// import { data } from '../data';

import { addMovies, addMovieToList, handleMovieSearch } from './actions';
import { search } from './reducers';

export class Navbar extends Component {

  constructor(props){
    super(props);
      this.state = {
       
        searchText : '',
      }
      
    
  }

  handleSearchResults=()=> {
    const {searchText} = this.state;
    // console.log("inside search" , searchText);

    this.props.dispatch(handleMovieSearch(searchText));
  }

  handleChange=(e)=>{
    this.setState({
      searchText : e.target.value,

    })
  }


  handleAddMovieToList = ()=>{
    const {result} = this.props.search;
    console.log("result after click", result);
    this.props.dispatch(addMovieToList(result))
  }
  render() {

    // console.log("This dot prop verify",this.props);

    
    const {search} = this.props;
    const {result , showSearchResults} = search;

    // console.log("Result",result);

 
    return (
      <div className="nav">
          <div className="search-container">
              <input onChange={this.handleChange}/>
              <button id='search-btn' onClick={this.handleSearchResults}>Search</button>

              { showSearchResults &&
                <div className='search-results'>
                  <div className='search-result'>
                    <img src={result.Poster} alt="search-pic" />
                    <div className='movie-info'>
                      <span>{result.Title}</span>
                      <button onClick={this.handleAddMovieToList} >Add to movies</button>
                    </div>
                  </div>
                </div>

              }
          </div>
      </div>
    )
  }
}

class NavbarWrapper extends React.Component{
  render(){
    return(
     <StoreContext.Consumer>
      {(store) => <Navbar dispatch={store.dispatch}  search={this.props.search}/>}
     </StoreContext.Consumer>
    )
  }
}

export default NavbarWrapper;