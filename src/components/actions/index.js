// {
//     type : 'ADD_MOVIES',
//     movies : [m1,m2,m3],
// }

// import { data } from "../../data";

// action types

export const ADD_MOVIES = 'ADD_MOVIES';

export const ADD_FAVOURITE = 'ADD_FAVOURITE';

export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';

export const SHOW_FAV = 'SHOW_FAV';

export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST'
 


// action creaters
export function addMovies(movies){
    console.log("add status", movies);

    return{
        type : ADD_MOVIES,
        movies 

    }
}

export function addFavourite(movie){
    return{
        type : ADD_FAVOURITE,
        movie 

    }
}


export function remFavourite(movie){
    return{
        type : REMOVE_FAVOURITE,
        movie 

    }
}

export function setFAV(val){
    return{
        type : SHOW_FAV,
        val
    }
}


export function handleMovieSearch(movie){
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=52c7dc4d&t=${movie}`;

    return function(dispatch){

        fetch(url)
        .then(response => response.json())
        .then(movie => {
           
            dispatch(addMovieSearchResult(movie))
        })

        

       

    }

   
}


export function addMovieSearchResult(movie){
    return{
        type : ADD_SEARCH_RESULT,
        movie
    }
}

export function addMovieToList(movie){
    return{
        type : ADD_MOVIE_TO_LIST,
        movie,
       
    }
}