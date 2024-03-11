import { useState } from 'react';
import './country.css'
import CountryDetails from '../countryDetails/CountryDetails';
const Country = ({ country, handlevisited, handleVisitedFlag }) => {
    const [visited, setVisited] = useState(false)
    const handclick = () => {
        setVisited(!visited)
    }


    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}  >
            <h3 style={{ color: country.name.common == 'Bangladesh' ? 'red' : 'white' }}>name : {country.name.common}</h3>
            <img src={country.flags.png} alt="" />
            <p>population : {country.population}</p>
            <p>Area : {country.area}</p>
            <p><small>Code : {country.cca3}</small></p>
            <button onClick={() => handlevisited(country)}>mark visited</button>
            <br />
            <button onClick={() => handleVisitedFlag(country.flags.png)}>mark visited Flag</button>
            <hr />
            <button onClick={handclick}>{visited ? 'visited' : 'visit'}</button>
            {
                visited ? 'i visited this country' : 'i want to visit it'
            }

            <CountryDetails country={country} handlevisited={handlevisited} handleVisitedFlag={handleVisitedFlag} >

            </CountryDetails>

        </div>
    );
};

export default Country;