import { SUBMIT_USER } from './actionTypes'

const initialState = {
    info:{
    firstName: '',
    lastName: '',
    birthday: null,
    age: '',
    hobby: '',
},
    users: []

}

export const reducer = (state = initialState, action) => {
    console.log('redux', state, action);
    switch (action.type) {
        case SUBMIT_USER:
            return Object.assign({}, state, {
                users: state.users.concat(action.payload)
            })
        default:
            return state;
    }
}

