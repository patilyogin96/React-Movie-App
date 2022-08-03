import { combineReducers } from "redux";
import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE , SHOW_FAV, ADD_SEARCH_RESULT, ADD_MOVIE_TO_LIST} from "../actions"

const initialMoviesState = {
    list : [],
    favourites : [],
    showFav : ''
}

export function movies(state=initialMoviesState, action){

    switch(action.type)
    {
        case ADD_MOVIE_TO_LIST :
            {
                return{
                    
                    ...state,
                    list : [action.movie,...state.list]
                  
                }
            }
        case ADD_MOVIES : return{
            ...state,
            list : action.movies,
        }
        case ADD_FAVOURITE : 
        return{
            ...state,
            favourites : [action.movie ,...state.favourites]
        }

        case REMOVE_FAVOURITE :
            const filteredArray = state.favourites.filter((movie) =>{
                return movie.Title !== action.movie.Title 
            });

            return{
                ...state,
                favourites : filteredArray,
            }

            case SHOW_FAV :
                return{
                    ...state,
                    showFav : action.val,

                }

            

        default : 
        return state;
    }
  
  
  
  
  
  
  
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list : action.movies,
    //     }
    // }

    // return state


}

const initialSearchState = {
    result : {},
    showSearchResults : false,
}


export function search( state = initialSearchState , action ){

   


    switch(action.type){
        case ADD_SEARCH_RESULT : 
        return {
            ...state,
            result : action.movie,
            showSearchResults : true,
        }

        case ADD_MOVIE_TO_LIST :
            {
                return{
                    
                    ...state,
                   showSearchResults : false,
                  
                }
            }

        default : return state;
    }

    

}

// const initialRootState ={
//     movies : initialMoviesState,
//     search : initialSearchState
// }

// export default function rootReducer(state = initialRootState , action){
//     return{
//         movies : movies(state.movies , action),
//         search : search(state.search , action)
//     }

// }


export default combineReducers({
    movies,
    search
})