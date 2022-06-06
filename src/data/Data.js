import {useEffect, useState} from "react";

export const Data = () => {
    const [list, setList] = useState(null);
    const [error, setError] = useState(false)

    useEffect(()=> {
        try {
            (async () => {
                const res = await fetch('https://api2.binance.com/api/v3/ticker/24hr');
                const data = await res.json();
                setList(data)
            })()
        } catch (e) {
            setError('Ładowanie danych nie powiodło się')
        }
    }, [])

    return list === null ? error ? error : "Ładuję dane" : list;
}