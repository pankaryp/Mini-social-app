// Initial state of the reducer
const initialState = {
    isAuthedicated: false,
    user: {}
}

/*
    Arguments:
    1. Initial state of the reducer
    2. action. (despatch actions to this reducer)

*/
export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}