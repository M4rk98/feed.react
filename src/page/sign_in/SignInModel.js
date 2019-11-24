import {UserServiceModel} from "../../service/UserServiceModel";
import {useForm} from "../../util/hook/useForm";
import {userLogin} from "../../action/userAction";
import store from '../../store'

export function SignInModel() {
    const userServiceModel = UserServiceModel();
    const form = useForm();
    const fields = [
        {
            name: 'username',
            type: 'text'
        },
        {
            name: 'password',
            type: 'password'
        },
    ];



    async function handleSignIn() {
        try {
            const {data} = await userServiceModel.postSignIn(form.data);
            store.dispatch(
                userLogin({
                    token: data.signUp.token,
                    username: form.data.username
                }));
            return 200;
        } catch (e) {
            return {
                errors: 'Sign in failed'
            }
        }
    }

    return {
        states: {
            form,
            fields
        },
        events: {
            handleSignIn
        }
    }
}