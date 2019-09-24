import React, { Component } from 'react'
import {connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from '../actions/index';

 class SerachBar extends Component {
    constructor(props){
        super(props);
        this.state= {term:''};
    }
    onFormSubmit = (e) =>{
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''})
    }
    
    render() {
        return (
            <form 
            onSubmit={this.onFormSubmit}
            className="input-group">
                <input 
                placeholder="type a city name to get five day forecast!"
                className="form-control"
                value={this.state.term}
                onChange={e => this.setState({ term : e.target.value})}
                
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">submit</button>
                </span>
            </form>
        )
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(null, mapDispatchToProps)(SerachBar);