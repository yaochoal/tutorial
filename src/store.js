import { createStore } from 'redux';

const reducer = (state,action) => {
    if(action.type === "ADD_TO_STORE"){
        return{
            ...state,
            datos : state.datos.concat(action.texto)
        }
    }
    return state;
};

export default createStore(reducer, {datos: [] });