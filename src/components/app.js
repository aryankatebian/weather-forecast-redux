import React, { Component } from 'react';
import SerachBar from '../containers/serachBar';
import WeatherList  from '../containers/weatherList'

export default class App extends Component {
  render() {
    return (
      <div>
        <SerachBar />
        <WeatherList />
      </div>
    );
  }
}
