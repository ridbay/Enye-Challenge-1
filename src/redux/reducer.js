const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    birthday: null,
    age: '',
    hobby: '',
    items: [],
}

const itemReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_ITEM':
            return state.concat({ firstName: action.firstName, lastName: action.lastName, id: action.id, hobby: action.hobby, birthday: action.birthday, age:action.age })

        default:
            return state;
    }
}

export default itemReducer;
