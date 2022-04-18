import { createStore } from "redux";

const reducer = (prevState={
    restauraunt:[]
},action) =>{
    let newState =  {...prevState}
    switch(action.type){
        case 'update':
            newState.restauraunt = action.payload
            return newState
        case 'favorite_on':
            newState.restauraunt[action.payload].isFavorite = "true"
            return newState
        case 'favorite_off':
            newState.restauraunt[action.payload].isFavorite = "false"
            return newState
        default:
            return prevState
    }
}

const store = createStore(reducer)

export default store