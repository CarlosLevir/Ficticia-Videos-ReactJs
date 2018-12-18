import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    DescriptionCard: {
        width: "100%",
        height: 155,
        marginTop: "1%",
    },
    videoTitle: {
        color: "#a8395c",
        fontFamily: "Titillium Web",
        fontWeight: "bold",
    },
    cardContent: {
        display: "flex",
        flexWrap: "wrap",
    }
}

class DescriptionVideoCard extends Component {

    state = {
        videoDescription: null,
        views: null,
        date: null,
    }

    render() {
        return (
            <Card style={styles.DescriptionCard}>
                <CardContent style={styles.cardContent}>
                    <Typography color="textSecondary" gutterBottom style={styles.videoTitle}>
                        {this.props.videoTitle}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        {this.props.videoDescription}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default DescriptionVideoCard;