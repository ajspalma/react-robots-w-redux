import { CHANGE_SEARCH_FIELD } from './constants';

// Starting point
const initialState = {
    searchField: ''
}

// Reducer
// Gets an input of state then add action
// action -> comes in the actions.js
export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            // return new state, and update a property
            // or use object spread ... instead of Object.assign
            return Object.assign({}, state, {
                searchField: action.payload
            });
        default: 
            return state;
    }
}