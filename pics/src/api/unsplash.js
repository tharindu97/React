import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID 2fbd2b17907d4fa4fc55cdaa3213b5c092a674d30ca5affa1e988f6df9dcdf6a'
    }
});