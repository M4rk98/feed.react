import {useForm} from "../../util/hook/useForm";
import {NewsServiceModel} from "../../service/NewsServiceModel";

export function NewsCreationModel() {
    const form = useForm();
    const newsServiceModel = NewsServiceModel();

    function createArticle() {
        try {
            const {data} = newsServiceModel.postCreateArticle(form.data);
            return 200;
        } catch (e) {
            return {
                'errors': 'Article creation failed'
            }
        }
    }

    return {
        states: {
            form
        },
        events: {
            createArticle
        }
    }
}