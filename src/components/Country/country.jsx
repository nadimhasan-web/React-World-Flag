import { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, area, population, cca3} = country;
    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }
    const passWithParams = ()=>{
        handleVisitedCountry(country);
    }
    
    return (
        <div className='country'>
            <h3>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p>Code:{cca3}</p>
            <button onClick={passWithParams}>Mark this country</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'i have visited this country' : 'i want to visit this country'}
        </div>
    );
};

export default Country;