import InputField from '../InputField/InputField';
import React, {useState, useRef} from "react";
import WeatherCard from '../WeatherCard/WeatherCard';

export default function Home() {
    const [city, setCity] = useState('')
    // const [lat, setLat] = useState([]);
    // const [long, setLong] = useState([]);

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //     setLat(position.coords.latitude);
    //     setLong(position.coords.longitude);
    // });

    //     // console.log("Latitude is:", lat)
    //     // console.log("Longitude is:", long)
    // }, [lat, long]);
      
    const searchForm = useRef(null);

    const handleClickEvent = (e) => {
        e.preventDefault();
        const form = searchForm.current;
        const city = form['search'].value;
        if(city === ''){
            alert("Field can not be empty")
        }
        else{
            setCity(city)
        }

    }


    return (
      <div className='my-5'>
          {/* <CurrentLocation lat={lat} long={long}></CurrentLocation> */}
          
        <form ref={searchForm} className="form-inline my-2 my-lg-0 d-flex justify-content-center">
            <InputField name={'search'}/>
            <button onClick={handleClickEvent} className="btn btn-outline-success my-2 my-sm-0 ms-5">Search</button>
        </form>

        <WeatherCard city={city}></WeatherCard>
        
      </div>
    

)};

