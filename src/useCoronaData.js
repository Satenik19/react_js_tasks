import {useEffect, useState} from "react";

export default function (value) {
    const [data, setData] = useState();
    useEffect(() => {
        if (value.length === 2) {
            const handle = setTimeout(() => {
                fetch(`https://corona-api.com/countries/${value}`)
                    .then(stream => stream.json())
                    .then(results => setData(results.data))
            }, 1000);

            return () => {
                clearTimeout(handle);
            }
        }
    }, [value]);

    return data;
}