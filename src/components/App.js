import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
import useVideos from '../hooks/useVideo';

const App = () => {
    
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('buildings')

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);
    

        return(
            <div className="ui container">
                <SearchBar onFormSubmit = {search}/>
                <div class="ui grid">
                    <div class="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={selectedVideo}/>
                            </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect = {selectedVideo} 
                        videos = {videos}/></div>
                    </div>
                </div>
            </div>
        )
}

export default App;