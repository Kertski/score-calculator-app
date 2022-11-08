import React, { useState, useEffect} from 'react';

function CityList(){
    const [cities, setCities] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:9000/cities")
        .then(response => response.json())
        .then(data => {
            setCities(data);
        })
        .catch((err) => {
                console.log(err.message)
        });
    },[]);

    return (
        <div>
            <h1>List of Cities</h1>
            <label className='h3'>Choose City</label>
            <select className='select'>
            <option>Select City</option>
            {cities.map((name)=>{
                return (
                    <option>
                        <div>
                        {name.city}
                        </div>
                    </option>
                );
            })}
            
            </select>
        </div>
    );
}

export default CityList;