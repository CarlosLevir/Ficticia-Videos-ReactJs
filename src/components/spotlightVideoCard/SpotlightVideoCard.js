import React, { Component } from 'react';

const styles = {
    spotlightVideoTitle: {
        color: "#a8385c",
        fontFamily: "Titillium Web",
        fontWeight: "normal",
    },
    spotlightVideo: {
        maxWidth: "100%",
    }
}

class SpotlightVideoCard extends Component {
    render() {
        return (
            <div>
                <h2 style={styles.spotlightVideoTitle}>Vídeo em destaque</h2>
                <div style={styles.spotlightVideoDiv}>
                    <iframe
                        title="Main Video"
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