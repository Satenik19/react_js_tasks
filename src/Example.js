import {useEffect, useState} from "react";

export default function Example() {
    const [title, setTitle] = useState("");
    useEffect(() => {
        console.log("mounted");

        return () => {
            console.log("unmounted");
        }
    }, [])

    useEffect(() => {
        console.log("updated");
    }, [title]);
    return (
        <div>
            <input type="name"
                   value={title}
                   onChange={(e) => setTitle(e.target.value)}
            />
        </div>
    )
}