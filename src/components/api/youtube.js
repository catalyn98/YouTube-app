import axios from 'axios';


//APY request is a asynchronous operation
//Anytime that we make an asynchronous operation we have to interact with promises or async away syntax 
const KEY = 'AIzaSyBQ4Eilmv-E_5wM_GoHrnZ6wmXMYCieSzQ'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5, 
        key: KEY,
    },
});