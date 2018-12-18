import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import ModalCard from '../modalCard/ModalCard';

const styles = {
    plusVideosTitle: {
        color: "#a8385c",
        fontFamily: "Titillium Web",
        fontWeight: "normal",
    },
    mainDiv: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    videoInfo: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        marginBottom: "15px",
        width: "400px",
        minWidth: "30%",
        marginLeft: "3%",
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
    },
    loadMoreButton: {
        color: "#797979",
        backgroundColor: "white",
        borderRadius: "5px",
        width: "30%",
        height: "25px",
    },
    buttonDiv: {
        width: "100%",
    }
}

class PlusVideosCard extends Component {

    state = {
        modal: 0,
        chosenVideo: null,
    }

    showModal = (e) => {
        this.setState({
            modal: 1,
            chosenVideo: e.target.dataset.value,
        })
    }

    hideModal = () => {
        this.setState({
            modal: 0,
        })
    }

    render() {
        var channelVideos = this.props.videos.map((video, key) => {
            return (
                <div style={styles.videoInfo} key={key} id={key} data-value={video.id.videoId} onClick={this.showModal}>
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
                <h2 style={styles.plusVideosTitle}>{this.props.titlePage}</h2>
                <Card style={styles.mainDiv}>
                    {channelVideos}
                    <div style={styles.buttonDiv}>
                        <button size="small" color="primary" style={styles.loadMoreButton} onClick={this.props.loadMoreVideos}>
                            CARREGAR MAIS VÍDEOS
                        </button>
                    </div>
                </Card>
                {this.state.modal === 1 && <ModalCard
                video={this.state.chosenVideo}
                hideModal={this.hideModal}
                />}
            </div>
        );
    }
}

export default PlusVideosCard;