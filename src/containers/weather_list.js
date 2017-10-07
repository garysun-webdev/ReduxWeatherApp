import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine} from 'react-sparklines';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const presures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        


        return(
            <tr key={name}>
                <td>{name}</td>
                
                <td>
                    <Sparklines height={120} width={180} data={temps}>
                        <SparklinesLine color="blue" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={120} width={180} data={presures}>
                        <SparklinesLine color="green" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={120} width={180} data={humidities}>
                        <SparklinesLine color="red" />
                    </Sparklines>
                </td>
                
            </tr>
        );
    }

    render() {
        return (
          <table className="table table-hover"  >
              <thead>
                  <tr>
                      <th>City</th>
                      <th>Temperature</th>
                      <th>Pressure</th>
                      <th>Humidity</th>
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
