import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/country";
import './countries.css'
const Countries = () => {
    const [country, stateCountry] = useState([])
    const [visitedCountry, setVisitedCountry] = useState([]);

    const handleVisitedCountry = country =>{
        console.log('mark this country');
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);
    }

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => stateCountry(data))
    },[])
    return (
        <div>
            <h2>Countries: {country.length}</h2>
            <div>
                <h3>Visited Country:{visitedCountry.length}</h3>
                <ul>
                    {
                        visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="cuntries-style">
                {
                    country.map(country =><Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;