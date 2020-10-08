import React from 'react';
import '../App.css';
import logo from '../assets/images/logo.png';

class InputCityName extends React.Component {
    state = {
        city: ''
    }

    handleChange = event => {
        this.setState({
            city: event.target.value
        })
    }
    render() {
        return (
            <div className="input-main">
                <div className="logo">
                    <img src={logo} alt="logo-weather" />
                </div>

                <div className="input">
                    <input type="text" placeholder="Input City Name..." value={this.state.city} onChange={this.handleChange} />
                    <button onClick={() => this.props.getTemperature(this.state.city)}>Submit</button>
                </div>
            </div>
        )
    }
}

export default InputCityName;