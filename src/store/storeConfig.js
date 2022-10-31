import {createStore, combineReducers} from 'redux'
import numerosReducer from './reducers/numeros'

const reducers = combineReducers({
    numeros: numerosReducer,
    //basta colocar os novos reducers aqui

})

function storeConfig(){
    return createStore(reducers)
}


export default storeConfig