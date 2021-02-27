import './Country.css'

import React from 'react';

function Country(props) {
    console.log(props.country);
    const {name, flag, capital, population, region} = props.country;
    return (
        <div className='country-info'>
            <img src={flag} alt=""/>
            <h3>name : {name}</h3>
            <h3>capital : {capital}</h3>
            <h3>Population : {population}</h3>
            <h3>region : {region}</h3>
        </div>
    );
}

export default Country;