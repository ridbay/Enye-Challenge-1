
const userReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return state.concat({ id: action.id, firstName: action.firstName, lastName: action.lastName, hobby: action.hobby, birthday: action.birthday, age:action.age })

        default:
            return state;
    }
}

export default userReducer;
