import React, { Component } from 'react';

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
    render() {
        return (
            <div>
                <h2 style={styles.spotlightVideoTitle}>Vídeo em distaque</h2>
                <div style={styles.spotlightVideoDiv}>
                    <iframe
                        style={styles.spotlightVideo}
                        width="560"
                        height="315"
                        src={"https://www.youtube.com/embed/" + this.props.spotlightUrl}
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