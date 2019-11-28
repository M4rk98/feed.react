import {UserServiceModel} from "../../service/UserServiceModel";
import {useForm} from "../../util/hook/useForm";
import {userLogin} from "../../action/userAction";
import store from '../../store'

export function SignUpModel() {
    const userServiceModel = UserServiceModel();
    const form = useForm();
    const fields = [
        {
            name: 'username',
            type: 'text'
        },
        {
            name: 'email',
            type: 'text'
        },
        {
            name: 'password',
            type: 'password'
        },
        {
            name: 'Repeat password',
            type: 'password'
        }
    ];



    async function handleSignUp() {
        try {
            const {data} = await userServiceModel.postSignUp(form.data);
            store.dispatch(
                userLogin({
                    token: data.signUp.token,
                    username: form.data.username
                }));
            return 200;
        } catch (e) {
            return {
                errors: 'Sign up failed'
            }
        }
    }

    return {
        states: {
            form,
            fields
        },
        events: {
            handleSignUp
        }
    }
}