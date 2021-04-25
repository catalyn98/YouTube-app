import {useState, useEffect} from 'react';
import youtube from '../components/api/youtube'

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        search(defaultSearchTerm)
    }, [defaultSearchTerm])

    //make as async function 
    const search =  async (term)=>{
        const response = await youtube.get('/search', {
            params: {
                q: term,
                },
            });

    setVideos(response.data.items);
}
return [videos, search]
}

export default useVideos;