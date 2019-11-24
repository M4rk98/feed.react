import {signUp} from "../api/UserApi";

export function UserServiceModel() {
    function postSignUp(data) {
        return signUp(data);
    }

    function postSignIn(data) {
        return signIn(data)
    }

    return {
        postSignUp,
        postSignIn
    }
}