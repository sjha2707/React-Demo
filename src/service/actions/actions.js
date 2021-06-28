
import { ADD_TO_CART,REMOVE_TO_CART} from '../constants'

export const addToCart = (data) => {
   // console.warn("Action Data:",data)
    return {
        type:ADD_TO_CART,
        data: data
    }
}


export const removeToCart = (data) => {
    // console.warn("Action Data:",data)
     return {
         type:REMOVE_TO_CART,
        
     }
 }
