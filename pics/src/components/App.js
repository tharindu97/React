import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos',{
            params: { query: term },
            headers: {
                Authorization: 
                'Client-ID 2fbd2b17907d4fa4fc55cdaa3213b5c092a674d30ca5affa1e988f6df9dcdf6a'
            }
        });
    }
    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        ); 
    }
    
};

export default App; 