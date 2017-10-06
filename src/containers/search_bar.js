import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};

        //bind this to this context
        //when you call a callback function, the context of 'this' changes.
        //everytime you need to bind the callback function to local area.
        this.onInputChange = this.onInputChange.bind(this);

    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();

        //We need to go and fetch weather data;

    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">

                <input 
                placeholder="Get a five-day forecast in your favourite cities"
                className="form-control"
                value={this.state.term}
                //onChange={(event)=>this.onInputChange(event)} />
                onChange={this.onInputChange} />

                <span className="input-group-btn">
                    <button className="btn btn-second" type="submit">Submit</button>
                </span>
            </form>
        );
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect