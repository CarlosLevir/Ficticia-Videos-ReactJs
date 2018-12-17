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
        maxWidth: 560,
    },
    outDescriptionDiv: {
        display: "flex",
        justifyContent: "center"
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
            videoTitle: null
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
                YoutubeService.getFullDescriptionVideo(this.state.spotlightVideoUrl).then((response) => {
                    this.setState({
                        videoDescription: response.data.items[0].snippet.description,
                        videoTitle: response.data.items[0].snippet.title,
                    })
                })
            }))
        })
    }

    changeVideo = (newVideo) => {
        this.setState({
            spotlightVideoUrl: newVideo,
        },
        () => YoutubeService.getRelatedVideos(this.state.spotlightVideoUrl).then((response) => {
            this.setState({
                relatedVideos: response.data.items,
            })
            YoutubeService.getFullDescriptionVideo(this.state.spotlightVideoUrl).then((response) => {
                this.setState({
                    videoDescription: response.data.items[0].snippet.description,
                })
            })
        }))
    }

    render() {
        return (
            <div style={styles.mainDiv}>
                <div style={styles.leftCard}>
                    <SpotlightVideoCard
                    spotlightUrl={this.state.spotlightVideoUrl}
                    />
                    <div style={styles.outDescriptionDiv}>
                        <div style={styles.descriptionDiv}>
                            <DescriptionVideoCard
                            videoTitle={this.state.videoTitle}
                            videoDescription={this.state.videoDescription}
                            />
                        </div>
                    </div>
                </div>
                <div style={styles.rightCard}>
                    <PlusVideosCard
                    changeVideo={this.changeVideo}
                    arrayVideosRelated={this.state.relatedVideos}
                    />
                </div>
            </div>
        );
    }
}

export default MainPage;