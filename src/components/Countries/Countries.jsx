import { useEffect } from "react";
import { useState } from "react";
import Country from "../../Country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitcountries,setvisitedCountries] = useState([])
    const [visitedFlag,setvisitedFlag] =useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    const handlevisited =(country)=>{
        console.log('click')
        const newVisited =[...visitcountries,country]
        setvisitedCountries(newVisited)
    }
    const handleVisitedFlag =(flag)=>{
        const newFlag =[...visitedFlag,flag]
        setvisitedFlag(newFlag)
    }
    return (
        <div >
            <h3>Countries : {countries.length}</h3>
            <h5>visited countries : {visitcountries.length}</h5>
            <ul>
              
                {
                    visitcountries.map((counry)=><li key={counry.cca3}>{counry.name.common}</li>)
                }

            </ul>

            <h5>visited countries Flag  :{visitedFlag.length}</h5>
            <div>
                {
                    visitedFlag.map((flag ,idx) => <img key={idx} src={flag}></img>)
                }
            </div>






            <div className="container">
            {
                countries.map((country) => <Country key={country.cca3} country={country}
                    handlevisited={handlevisited}
                    handleVisitedFlag ={handleVisitedFlag}
                
                ></Country>)
            }
            </div>

        </div>
    );
};

export default Countries;