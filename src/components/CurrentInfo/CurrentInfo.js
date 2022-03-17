import React, {useState, useEffect} from 'react';
import ShowInfo from '../ShowInfo/ShowInfo';

export default function CurrentInfo({cityKey}) {
    const [data, setData] = useState({})

    const url = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${process.env.REACT_APP_API_KEY}`
    

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data[0]))
            .catch(err => console.warn(err))
    }, [cityKey])
    
    console.log(data)
    
  return (
    
    <>
        {data && 
            <ShowInfo data={data} ></ShowInfo>
        }
    </>
    
  )
}
