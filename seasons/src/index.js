import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);
        // this is the only time we do direct
        this.state = { lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // We called setState
                this.setState({lat: position.coords.latitude });
                
                // We did not!!!
                //this.state.lat = position.coords.latitude
            },
            err => {
                this.setState({ errorMessage: err.message });
            }
        );
    }
    componentDidMount(){
        console.log('my componet was rendered to the screen');
    }
    componentDidUpdate(){
        console.log('my component was just update - it render');
    }
        render() {
            if(this.state.errorMessage && !this.state.lat){
            return <div> Error: {this.state.errorMessage}</div>
            }

            if(!this.state.errorMessage && this.state.errorMessage){
            return <div>Latitude: {this.state.lat}</div>
            }

            return <div>Loading...</div>
        }
    }


ReactDOM.render(<App /> , document.querySelector('#root'));