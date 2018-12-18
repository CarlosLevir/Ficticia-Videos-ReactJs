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

    loadMoreVideos = () => {
        YoutubeService.getChannelVideos(24).then((response) => {
            this.setState({
                videos: response.data.items,
            })
        })
    }
    
    render() {
        return (
            <div>
                <ChannelVideosCard
                titlePage="Todos os vídeos do Canal"
                videos={this.state.videos}
                loadMoreVideos={this.loadMoreVideos}
                showButton={"block"}
                />
            </div>
        );
    }
}

export default ChannelVideos;