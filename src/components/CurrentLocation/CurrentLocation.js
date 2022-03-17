import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function CurrentLocation({lat, long}) {
    
    const [data, setData] = useState([]);

    const url = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${process.env.REACT_APP_API_KEY}&q=${lat},${long}`
  
    
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(url);
    
          setData(result);
        };
        console.log(data)
        fetchData();
      }, [url, data]);     
    
    
  return (
    <div>
        {(typeof data != 'undefined') ? (
            <h3>Current Location: {data}</h3>
      ): (
        <h3>Current Location not found</h3>
      )}
        
    </div>
  )
}
