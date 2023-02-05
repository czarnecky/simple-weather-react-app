import React from 'react';

const Result = (props) => {


    const {err, city, sunrise, sunset, temp, pressure, wind} = props.weather

    return (
        <div>
        <div>Pogoda dla: {city}</div>
        <div>Tempertatura: {temp}</div>
        <div>Wschod słońca: {sunrise}</div>
        <div>Zachod słońca: {sunset}</div>
        <div>Cisnienie: {pressure}</div>
        <div>Predkosc wiatru: {wind}</div>
        </div>
    );
}

export default Result;