import axios from 'axios';

const KEY = 'AIzaSyADvll86U5IdEkfvxmJ4xWbe5sg2EZ2oOo';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});
