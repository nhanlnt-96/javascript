import React from 'react';
import '../App.css';

class CityNameInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameOfCity: ''
        }
    }

    nameInput = (e) => {
        this.setState({
            nameOfCity: e.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <input onChange={this.nameInput} name="cityName" placeholder="Type city name..." />
                <button onClick={() => this.props.getTemp(this.state.nameOfCity)}>Submit</button>
            </React.Fragment>
        )
    }
}

export default CityNameInput;