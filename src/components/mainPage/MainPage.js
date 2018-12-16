import React, { Component } from 'react';
import DescriptionVideoCard from '../descriptionVideoCard/DescriptionVideoCard';
import SpotlightVideoCard from '../spotlightVideoCard/SpotlightVideoCard';
import PlusVideosCard from '../plusVideosCard/PlusVideosCard';
import * as YoutubeService from '../../services/youtubeServices/YoutubeServices';

const styles = {
    mainDiv: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    descriptionDiv: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    leftCard: {
        width: "50%",
        minWidth: 345,
    },
    rightCard: {
        width: "20%",
        minWidth: 345,
    },
}

class MainPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            spotlightVideoUrl: null,
            videoDescription: null,
            relatedVideos: [],
        }
    }

    componentDidMount = () => {
        YoutubeService.getUnsubscribedTrailer().then((response) => {
            this.setState({
                spotlightVideoUrl: response.data.items[0].brandingSettings.channel.unsubscribedTrailer,
            },
            () => YoutubeService.getRelatedVideos(this.state.spotlightVideoUrl).then((response) => {
                this.setState({
                    relatedVideos: response.data.items,
                })
            }))
        })
    }

    render() {
        return (
            <div style={styles.mainDiv}>
                <div style={styles.leftCard}>
                    <SpotlightVideoCard
                    spotlightUrl={this.state.spotlightVideoUrl}
                    />
                    <div style={styles.descriptionDiv}>
                        <DescriptionVideoCard />
                    </div>
                </div>
                <div style={styles.rightCard}>
                    <PlusVideosCard
                    arrayVideosRelated={this.state.relatedVideos}
                    />
                </div>
            </div>
        );
    }
}

export default MainPage;