import './Visited.css';

const Visited = ({country}) => {
    
    return (
        <div className='visited-card'>
            <p style={{
                fontSize: '10px',
                margin: '0 0 8px 0'
            }}>Country Name : {country?.name?.common}</p>
            <div className='img-box'>
                <img className='visited-img' src={country?.flags?.png}/>
            </div>
        </div>
    );
};

export default Visited;