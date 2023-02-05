import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";
import "./App.css";

//Klucz do API
const APIKey = "252e8c27dcfaa488285a50772a492cec";

class App extends Component {
  state = {
    value: "Warszawa",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false,
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleCitySubmit = (e) => {
    console.log("potwierdzony form");
    e.preventDefault(); // powstrzymaj domysle zachowanie forma - odswiezenie (na submit)

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Blad! Nie udalo sie pobrac danych");
      })
      .then((response) => response.json())
      .then((data) => {
        const currentTime = new Date().toLocaleString;
        this.setState((prevState) => ({
          err: false,
          date: currentTime,
          city: this.state.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
        }));
      })
      .catch((err) => {
        console.log(err);
        this.setState((prevState) => ({
          err: true,
          city: this.state.value,
        }));
      });
  };

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result 
        weather={this.state}
        
        />
      </div>
    );
  }
}

export default App;
