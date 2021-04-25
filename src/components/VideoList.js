import React from 'react';
import VideoItems from './VideoItems';

const VideoList = ({videos, onVideoSelect}) =>{

    const renderList = videos.map(video => {
        return <VideoItems  key={video.id.videoID}
                            onVideoSelect = {onVideoSelect} 
                            video = {video}/>
    });

        return(
            <div className="ui relaxed divided list">{renderList}</div>
        );
}

export default VideoList;