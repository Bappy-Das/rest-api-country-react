import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countrieses, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);
    return (
        <div>
            <h1>Hello from Countries :{countrieses.length}</h1>
            <div className="single-country">
                {
                    countrieses.map(country => <Country name={country.name} capital={country.capital} flag={country.flag} population={country.population}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;