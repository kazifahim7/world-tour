import CountryData from "../countryData/CountryData";

const CountryDetails = ({ country}) => {
    return (
        <div>
            <h4>country Details</h4>
            <hr />
            <CountryData country={country}>

            </CountryData>
            
        </div>
    );
};

export default CountryDetails;