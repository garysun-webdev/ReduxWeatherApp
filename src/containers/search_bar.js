import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.props.fetchWeather("brisbane");
        this.props.fetchWeather("sydney");
        this.props.fetchWeather("melbourne");
        this.state = {term: ''};

        //bind this to this context
        //when you call a callback function, the context of 'this' changes.
        //everytime you need to bind the callback function to local area.
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});

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

export default connect(null, mapDispatchToProps)(SearchBar);