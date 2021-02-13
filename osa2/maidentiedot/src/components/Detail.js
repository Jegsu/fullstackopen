import React, { useEffect, useState } from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

const Detail = ({ result }) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${result.capital}`)
            .then(response => {
                setWeather(response.data)
                console.log(response.data)
            })
    }, [result]);

    return (
        <div>
            <h2>{result.name}</h2>
            <img src={result.flag} alt={""} height={100} width={150} />
            <p>Capital: {result.capital}</p>
            <p>Population: {result.population}</p>
            <h2>Languages</h2>
            <ul>
                {result.languages.map((lang, i) =>
                    <li key={i}>{lang.name}</li>
                )}
            </ul>
            <h2>Weather in {result.capital}</h2>
            {weather ?
                <div>
                    <img src={weather.current.weather_icons[0]} alt="icon" />
                    <p><strong>Temperature: </strong>{weather.current.temperature} Celsius</p>
                    <p><strong>Wind: </strong>{weather.current.wind_speed} kmh direction {weather.current.wind_dir}</p>
                </div>
                : <p>Loading...</p>}
        </div>
    )
}

export default Detail