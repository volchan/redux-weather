import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ChartItem from "../components/chart_item";

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => _.round((weather.main.temp_min + weather.main.temp_max) / 2), 2);
    const celsuisTemps = _.map(temps, (temp) => _.round((temp - 273.15), 2));
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><ChartItem data={celsuisTemps} color="orange" unit="°C" /></td>
        <td><ChartItem data={pressures} color="purple" unit="hPa" /></td>
        <td><ChartItem data={humidity} color="blue" unit="%" /></td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
