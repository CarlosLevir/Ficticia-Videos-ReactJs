import React, { Component } from 'react';
import * as YoutubeService from '../../services/youtubeServices/YoutubeServices';

class PlusVideosCard extends Component {

    loadVideos = () => {
        YoutubeService.getChannelVideos().then((response) => {
            // code here
        })
    }

    render() {
        this.loadVideos();
        return (
            <div>
                
            </div>
        );
    }
}

export default PlusVideosCard;