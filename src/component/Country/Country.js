import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props);
    return (

        <div className="country">
            <img className="flag-img" src={props.flag} alt="" srcset="" />
            <h3>Country Name: {props.name}</h3>
            <h5>{props.capital}is capital of {props.name}</h5>
            <h5>Population: {props.population}</h5>

        </div>


    );
};

export default Country;