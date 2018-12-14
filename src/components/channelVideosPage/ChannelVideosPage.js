import React, { Component } from 'react';
import ChannelVideosCard from '../channelVideosCard/ChannelVideosCard';
import * as YoutubeService from '../../services/youtubeServices/YoutubeServices';

class ChannelVideos extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
        }
    }

    componentDidMount = () => {
        YoutubeService.getChannelVideos().then((response) => {
            this.setState({
                videos: response.data.items,
            })
        })
    }
    
    render() {
        return (
            <div>
                <ChannelVideosCard
                videos={this.state.videos}
                />
            </div>
        );
    }
}

export default ChannelVideos;