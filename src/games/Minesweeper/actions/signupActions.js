import { ADD_PLAYER } from "../reducers/actionTypes";

//implicit return

const signupActions = ({name}) => ({
    type: ADD_PLAYER, 
    payload: {name},

});

export default signupActions;