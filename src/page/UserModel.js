import store from "../store";
import {userLogin} from "../action/userAction";

export function UserModel() {
    function logout() {
        console.log("LOGOUT");
        store.dispatch(userLogin({
            token: null,
            username: null
        }))
    }

    return {
        logout
    }
}