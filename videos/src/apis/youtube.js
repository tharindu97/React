import axios from 'axios';

const KEY = 'AIzaSyBUvpe3Wh1zw2Qtj0u-9Xqk4RrezxfxKzI';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});
