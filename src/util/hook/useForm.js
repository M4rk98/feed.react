import {useState} from "react";

export function useForm() {
    const [data, setData] = useState({});

    function setFormDataByName(name, value) {
        setData({
            ...data,
            [name]: value
        })
    }

    return {
        data,
        setFormDataByName
    }
}