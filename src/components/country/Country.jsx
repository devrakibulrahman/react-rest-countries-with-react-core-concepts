import { useState } from 'react';
import './Country.css';

const Country = ({country, handleAddVisitedList}) => {

    const [isVisited, setVisited] = useState(false);
    const [isAddVisited, setAddVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!isVisited);
    };

    const handleAddVisited = () => {
        setAddVisited(true);
    };

    const handleAddVisitedListBtn = (countryData) => {
        handleAddVisitedList(countryData);
        handleAddVisited();
    };

    return (
        <div className={`country-card ${isVisited ? 'inactive' : 'active'}`}>
            <div className='flag-container'>
                <img src={country?.flags?.png} className='flag-img'/>
            </div>
            <h4>Country Name : {country.name?.common}</h4>
            <p>Country Area : {country?.area}</p>
            <p>Country Code : {country?.cca3}</p>
            <p>Country Region : {country?.region}</p>
            <div className='btn-bx'>
                <button onClick={handleVisited} className={isVisited && 'activeBtn'}>{isVisited ? 'Visited' : 'Visit'}</button>
                <button onClick={() => handleAddVisitedListBtn(country)} className={isAddVisited && 'activeBtn'}>Add Visited List</button>
            </div>
        </div>
    );
};

export default Country;