import './App.css';
import React, {useEffect, useState} from "react";

export const App = () => {
    const [list, setList] = useState(null);
    const [error, setError] = useState(false)

    useEffect(() => {
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

    if (list === null) {
        return error ? error : "Ładowanie danych";
    }

    return (
        <div className="App">
            <select>
                {list
                    .map(pair => <option value={pair.symbol} key={pair.symbol}>{pair.symbol}</option>)}
            </select>
        </div>
    );
}
