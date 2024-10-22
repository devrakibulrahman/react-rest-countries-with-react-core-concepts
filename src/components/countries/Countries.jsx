import { useState } from 'react';
import { useEffect } from 'react';
import './Countries.css';
import Country from '../country/Country.jsx';
import Visited from '../visited/Visited.jsx';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((data) => setCountries(data))
    }, []);

    const handleAddVisitedList = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    };

    return (
        <div>
            <h3>Visited Countries : {visitedCountries.length}</h3>
            <div className='visited-country-container'>
                {
                    visitedCountries.map((country) => <Visited country={country}/>)
                }
            </div>
            <div>
                <h3>Total Countries : {countries.length}</h3>
                <div className='countries-card-container'>
                    {
                        countries.map((country) => <Country key={country.ccn3} country={country} handleAddVisitedList={handleAddVisitedList}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Countries;