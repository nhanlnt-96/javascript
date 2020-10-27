import React from 'react';
import '../App.css';

class CityNameInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameOfCity: '',
            keyInput: ''
        }
    }

    inputCityName = (e) => {
        const input = e.target.value;
        this.setState ({
            nameOfCity: input
        })
    }

    render() {
        return (
            <div className="input-city-name">
                <input 
                    className="input-css" 
                    name="cityName" 
                    type="text" 
                    value={this.state.nameOfCity} 
                    placeholder="Type city name here..." 
                    onChange={this.inputCityName} />
                <button className="input-css" onClick={() => this.props.getWeatherInfo(this.state.nameOfCity)}>Submit</button>
            </div>
        )
    }
}

export default CityNameInput;