import { ADD_FAVORITE, TOGGLE_FAVORITES, REMOVE_FAVORITE } from './../actions/favoritesActions';

export const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE: 
        const newFavorite = action.payload;
        return{
            ...state,
            favorites: [...state.favorites,  newFavorite]
        }
        case TOGGLE_FAVORITES:
            return{
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case REMOVE_FAVORITE:
            return{
                ...state,
                favorites: state.favorites.filter(item => (action.payload !== item.id))
            }
        default: return state;
    }
};

export default favoritesReducer;