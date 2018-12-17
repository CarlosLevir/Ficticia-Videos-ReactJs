import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
    plusVideosTitle: {
        color: "#a8385c",
        fontFamily: "Titillium Web",
        fontWeight: "normal",
    },
    videoInfo: {
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
        cursor: "pointer",
    },
    thumbRelated: {
        width: 170,
        height: 95,
    },
    relatedVideoTitle: {
        maxWidth: "40%",
        color: "#a8395c",
        fontFamily: "Titillium Web",
        fontWeight: "bold",
    }
}

class PlusVideosCard extends Component {

    handleClick = (e) => {
        this.props.changeVideo(e.target.dataset.value);
    }

    render() {
        var relatedVideos = this.props.arrayVideosRelated.map((video, key) => {
            return (
                <div style={styles.videoInfo} key={key} data-value={video.id.videoId} onClick={this.handleClick}>
                    <CardMedia
                    data-value={video.id.videoId}
                    style={styles.thumbRelated}
                    image={video.snippet.thumbnails.medium.url}
                    />
                    <Typography style={styles.relatedVideoTitle} data-value={video.id.videoId} component="p" color="textSecondary">
                        {video.snippet.title}
                    </Typography>
                </div>
            );
            
        })
        return (
            <div>
                <h2 style={styles.plusVideosTitle}>+ Vídeos</h2>
                <Card>
                    <CardContent>
                        {relatedVideos}
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default PlusVideosCard;