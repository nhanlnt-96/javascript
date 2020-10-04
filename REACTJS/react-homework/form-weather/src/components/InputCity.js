import React from 'react';

class InputCity extends React.Component {
    state= {
        city: ''
    }

    handleChange = event => {
        this.setState ({
            city : event.target.value
        })
    }

    render () {
        console.log(this.props);
        
        return (
            <div>
                <input name="address" type="text" value={this.state.city} onChange={this.handleChange} />
                <button onClick={() => this.props.getTemperature(this.state.city)}>Submit</button>
            </div>
        )
    }
}

export default InputCity;