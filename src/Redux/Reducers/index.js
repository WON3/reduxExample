import { combineReducers } from 'redux';
import {UniqueTypeOne, uniqueTypeTwo, hello, goodbye, maybe, abc, josh, Dan} from '../Actions/constraints'

const myFirstReduxState = (state = "This is my first redux property", action) => {
    //action = object
    switch(action.type){
        case UniqueTypeOne:
            return "You used unique type one";
        case uniqueTypeTwo: 
            return action.payload;
        default:
            return state;
    }
}

const mySecondReduxState = (state = "This is my Second redux property", action) => {

        switch(action.type){
            case hello:
                return "You used unique type one";
            case goodbye: 
                return action.payload;
            default:
                return state;
    }
}

const myThirdReduxState = (state = "This is my Third redux property", action) => {
        switch(action.type){
        case maybe:
            return "You used unique type one";
        case abc: 
            return action.payload;
        default:
            return state;
    }
}

const myFourthReduxState = (state = "This is my Fourth redux property", action) => {
        switch(action.type){
        case josh:
            return "You used unique type one";
        case Dan: 
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({myFirstReduxState, mySecondReduxState, myThirdReduxState, myFourthReduxState})