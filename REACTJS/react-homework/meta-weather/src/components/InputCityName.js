import React from 'react';
import '../App.css';
import logo from '../assets/images/logo.png';

class InputCityName extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: null
        }
        console.log('props: ', props);
    }

    componentDidMount() {
        const { defaultValue, getTemperature } = this.props;
        if(defaultValue) {
            getTemperature(defaultValue);
            this.setState({city: defaultValue});
        }
    }

    handleChange = event => {
        this.setState({
            city: event.target.value
        })
    }

    getCity = () => {
        console.log('getCity');
    
    }
    
    onSubmitBtnClick = (e) => {
        // console.log('onSubmit Click', e);
        console.log('getCity');
        this.getCity(this.state.city);
        this.props.getTemperature(this.state.city);
    }

    render() {
        console.log(this.props);
        return (
            <div className="input-main">
                <div className="logo">
                    <img src={logo} alt="logo-weather" />
                </div>

                <div className="input">
                    <input type="text" placeholder="Input City Name..." value={this.state.city} onChange={this.handleChange}
                    onKeyUp={(e) => {
                        console.log('onKeyUp', e.keyCode);
                        if (e.keyCode === 13) {
                            this.props.getTemperature(this.state.city)
                        }
                    }} />
                    <button 
                        onClick={this.onSubmitBtnClick}
                    >Submit</button>
                </div>
            </div>
        )
    }
}

export default InputCityName;