import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action){
    switch(action.type){
        case FETCH_WEATHER: 
            //do not modify the existing one but create a new one
            return [action.payload.data, ... state];

    }
    console.log('Action received', action);
    return state;
}
