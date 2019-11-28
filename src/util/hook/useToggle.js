import {useState} from "react";

export function useToggle() {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState('default');

    function toggle(newContent) {
        setOpen(!open);
        if(newContent && content !== newContent) {
            setContent(newContent)
        }
    }

    return {
        toggle,
        open,
        content
    }
}