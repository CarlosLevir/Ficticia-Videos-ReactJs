import React, { Component } from 'react';
import ChannelVideosCard from '../channelVideosCard/ChannelVideosCard';

class SearchPage extends Component {
    render() {
        return (
            <div>
                <ChannelVideosCard
                titlePage={'Resultados para: "' + this.props.keyword + '"'}
                videos={this.props.videosDataSearch}
                showButton={"none"}
                />
            </div>
        );
    }
}

export default SearchPage;