import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, flag, capital, population } = props.country;
    // console.log(props.country);
    return (

        <div className="country">
            {/* <img className="flag-img" src={props.country.flag} alt="" srcset="" />
            <h3>Country Name: {props.country.name}</h3>
            <h5>{props.country.capital}is capital of {props.country.name}</h5>
            <h5>Population: {props.country.population}</h5> */}
            <img className="flag-img" src={flag} alt="" srcset="" />
            <h3>Country Name: {name}</h3>
            <h5>{capital}is capital of {name}</h5>
            <h5>Population: {population}</h5>

        </div>


    );
};

export default Country;