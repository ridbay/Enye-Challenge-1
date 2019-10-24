const INITIAL_STATE ={
    items: []
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return {
                ...state,
                items: action.payload
            }
    
        default:
            return state;
    }
}

export default userReducer;