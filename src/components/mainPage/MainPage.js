import React, { Component } from 'react';
import DescriptionVideoCard from '../descriptionVideoCard/DescriptionVideoCard';
import getChannelVideos from '../../services/userChannelVideos/UserChannelVideos';

const styles = {
    spotlightVideoDiv: {
        display: "flex",
    },
    spotlightVideoTitle: {
        color: "#a8385c",
        fontFamily: "Titillium Web",
        fontWeight: "normal",
    },
    spotlightVideo: {
        maxWidth: "80%",
    },
}

class MainPage extends Component {
    render() {
        return (
            <div>
                <div style={styles.spotlightVideoDi}>
                    <h2 style={styles.spotlightVideoTitle}>Vídeo em distaque</h2>
                    <iframe
                        style={styles.spotlightVideo}
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/IxGhaVdRUQc"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <div>
                    <DescriptionVideoCard/>
                </div>
            </div>
        );
    }
}

export default MainPage;