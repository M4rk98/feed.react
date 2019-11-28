import {USER_LOGIN} from "../constants/action/userAction";

export const user = (state = {}, action) => {
    console.log(action);
    if (action.type === USER_LOGIN) {
        return {
            ...state,
            token: action.payload.token,
            username: action.payload.username
        }
    } else { return state }
}