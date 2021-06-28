import { combineReducers} from 'redux'
import cardItems from './reducer'
//Wrapper class

export default combineReducers(
    {
        cardItems,
    });