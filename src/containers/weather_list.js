import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp),temp=>temp-273.15);
        const presures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lat, lon} = cityData.city.coord;
        


        return(
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td><Chart data={temps} color="orange" type="C" /></td>
                <td><Chart data={presures} color="green" type="hPa" /></td>
                <td><Chart data={humidities} color="blue" type="%" /></td>  
            </tr>
        );
    }

    render() {
        return (
          <table className="table table-hover"  >
              <thead>
                  <tr>
                      <th>City</th>
                      <th>Temperature (C)</th>
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


// {weather} = 
//  const weather = state.weather
function mapStateToProps({ weather }){
    return { weather }; // {weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
