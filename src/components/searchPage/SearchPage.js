import React, { Component } from 'react';
import ChannelVideosCard from '../channelVideosCard/ChannelVideosCard';
import * as YoutubeService from '../../services/youtubeServices/YoutubeServices';

class SearchPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
        }
    }

    componentDidMount = () => {
        YoutubeService.getSearchedVideos(this.props.keyword).then((response) => {
            this.setState({
                videos: response.data.items,
            })
        })
    }
    
    render() {
        return (
            <div>
                <ChannelVideosCard
                titlePage={'Resultados para: "' + this.props.keyword + '"'}
                videos={this.state.videos}
                showButton={"none"}
                />
            </div>
        );
    }
}

export default SearchPage;