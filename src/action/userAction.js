import {USER_LOGIN} from "../constants/action/userAction";

export const userLogin = (data) => {
    console.log(data);
    return {
        type: USER_LOGIN,
        payload: data
    }
};