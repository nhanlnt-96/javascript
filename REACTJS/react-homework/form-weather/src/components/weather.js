import React from 'react';
import axios from 'axios'

class Weather extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://www.metaweather.com/api/location/search/?query=ho')
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <h1>The result is</h1>
        )
    }

}

export default Weather;