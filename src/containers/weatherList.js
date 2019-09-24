import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';



class weatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat } = cityData.city.coord;
        
        
        return(
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}  /></td>
                <td><Chart data={temps} color="orange"/></td>
                <td><Chart data={pressure} color="black"/></td>
                <td><Chart data={humidities} color="red"/></td>
            </tr>
            
        )
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>city</th>
                        <th>temperature (k)</th>
                        <th>pressure (hPa)</th>
                        <th>humidity (%)</th>
                    </tr>
                </thead>
                <tbody style={{background : "#f7f5f5"}}>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
                
            </table>
        )
    }
}
function mapStateToProps({ weather }) {
    return { weather };
}
export default connect(mapStateToProps)(weatherList)