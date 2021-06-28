
import { ADD_TO_CART , REMOVE_TO_CART} from '../constants'
const intialState = {
    cardData: []
}
export default function cardItems(state=[], action) {
    switch (action.type) {
        case ADD_TO_CART:
            //console.warn("Reducer Data", action)
            return [
                ...state,
                {cardData: action.data}
            ]
            break;
        case REMOVE_TO_CART:
            //console.warn("Reducer Data", action)
            state.pop()
            return [
                
                ...state,
                //{cardData: action.data}
            ]
            break;
        default:
            return state

    }
}