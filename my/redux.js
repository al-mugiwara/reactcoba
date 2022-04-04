const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 17
}

//reducer = untuk mengupdate store
const rootReducer = (state = initialState, action) => {
    console.log(action);
    // if(action.type === 'ADD_AGE'){
    //     return {
    //         ...state, //... state artinya copy isi state sebelumnya
    //         age: state.age + 1
    //     }
    // }

    // if(action.type === 'CHANGE_VALUE'){
    //     return{
    //         ...state,
    //         value: state.value + action.newValue
    //     }
    // }
    switch (action.type) {
        case 'ADD_AGE':
            return {
                ...state, //... state artinya copy isi state sebelumnya
                age: state.age + 1
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state;
    }
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

//subscribe = proses penggunaan store
store.subscribe(() => {
    console.log('store change : ',store.getState())
})

// dispatch action 

store.dispatch({ type: 'ADD_AGE' })
store.dispatch({ type: 'CHANGE_VALUE', newValue: 12 })
console.log(store.getState());

