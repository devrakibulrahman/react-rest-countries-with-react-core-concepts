import './Countries.css';
import Country from '../country/Country.jsx';
import { useState } from 'react';
import { useEffect } from 'react';

const Countries = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((data) => console.log(data))
    }, []);

    return (
        <div>
            <Country></Country>
        </div>
    );
};

export default Countries;