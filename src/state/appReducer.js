import {
    FETCHING_API_START,
    FETCHING_API_SUCCESS,
    FETCHING_API_FAILURE,
    SEARCH_VALUE
} from "./constants";

const log = console.log;

// 1. set initial state
const initialState = {
    loading: false,
    error: "",
    searchValue: "",
}

//2. Create features reducer that takes in initial state, sets it equal to state and takes in action
export const appReducer = (state = initialState, action) => {
//3. initialize switch statement to handle each action
    switch (action.type) {
        case FETCHING_API_START: {
            log("FETCH RUNNING THROUGH REDUCER");
            //return shallow copy of state and loading value set to true
            return {...state, loading: true};
        }

        case FETCHING_API_SUCCESS: {
            //return shallow copy of state and loading value set to false as well as the returned recipe data
            log("FETCH SUCCESS THROUGH REDUCER");
            return {...state, loading: false, recipe: action.payload}
        }

        case FETCHING_API_FAILURE: {
            //return shallow copy of state, loading value set to false and error message
            log("FETCH FAILURE OCCURRED");
            return {...state, loading: false, error: action.payload}
        }

        case SEARCH_VALUE: {
            //return shallow copy of state and search value
            log("SEARCH VALUE FROM REDUCER>>>>>>>>>>>>", action.payload)
            return {...state, searchValue: action.payload}
        }
        default: 
            return state;
    }


}

