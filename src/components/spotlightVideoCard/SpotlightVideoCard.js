import React, { Component } from 'react';
import * as YoutubeService from '../../services/youtubeServices/YoutubeServices';

const styles = {
    spotlightVideoTitle: {
        color: "#a8385c",
        fontFamily: "Titillium Web",
        fontWeight: "normal",
    },
    spotlightVideo: {
        maxWidth: "80%",
    }
}

class SpotlightVideoCard extends Component {
    constructor(props){
        super(props);

        this.state = {
            spotlightVideoUrl: null,
        }
    }

    loadSpotlightVideo = () => {
        YoutubeService.getUnsubscribedTrailer().then((response) => {
            this.setState({
                spotlightVideoUrl: "https://www.youtube.com/embed/" + response.data.items[0].brandingSettings.channel.unsubscribedTrailer,
            })
        })
    }

    render() {
        this.loadSpotlightVideo();
        return (
            <div>
                <h2 style={styles.spotlightVideoTitle}>Vídeo em distaque</h2>
                <div style={styles.spotlightVideoDiv}>
                    <iframe
                        style={styles.spotlightVideo}
                        width="560"
                        height="315"
                        src={this.state.spotlightVideoUrl}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        );
    }
}

export default SpotlightVideoCard;