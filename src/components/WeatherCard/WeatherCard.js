import React, {useState, useEffect} from 'react';
import companyLogo from '../../image/img.png';
import CurrentInfo from '../CurrentInfo/CurrentInfo';

export default function WeatherCard(props) {
    const {city} = props;
    console.log(city)
    const [data, setData] = useState({})
    
    
    const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_API_KEY}&q=${city}`
    
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data[0]))
            .catch(err => console.warn(err))
    }, [city])
    
    console.log(data)
  return (
    <>
        {typeof(data) !== 'undefined' ?
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <p>Hello {city}</p>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={companyLogo} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{data?.LocalizedName}</h5>
                    
                            <div className="card-text">
                        
                              <CurrentInfo cityKey={data?.Key}></CurrentInfo> 
                              
                        
                            </div>
                            <p className="card-text"><small className="text-muted">{data?.Country?.ID}</small></p>
                        </div>
                    </div>
                </div> 
            </div>
            : <h3>City not found</h3>
        
    }
    </>
    
    
  )
}
