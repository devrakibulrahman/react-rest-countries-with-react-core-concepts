import './Country.css';

const Country = ({country}) => {

    return (
        <div className='country-card'>
            <div className='flag-container'>
                <img src={country?.flags?.png} className='flag-img'/>
            </div>
            <h4>Country Name : {country.name?.common}</h4>
            <p>Country Area : {country?.area}</p>
            <p>Country Region : {country?.region}</p>
            <div className='btn-bx'>
                <button>Visit</button>
                <button>Add Visited List</button>
            </div>
        </div>
    );
};

export default Country;