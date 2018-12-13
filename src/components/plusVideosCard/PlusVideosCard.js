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
    }
}

class PlusVideosCard extends Component {
    render() {
        var relatedVideos = this.props.arrayVideosRelated.map((video, key) => {
            return (
                <Card className="card-items" key={key}>
                    <CardContent>
                        <CardMedia
                            image={video.snippet.thumbnails.medium.url}
                        />
                        <Typography component="p" color="textSecondary">
                            {video.snippet.title}
                        </Typography>
                        <Typography
                            component="p"
                            size="small">
                            {/* views */}
                        </Typography>
                    </CardContent>
                </Card>
            );
            
        })
        return (
            <div className="div-cards-repos">
                {relatedVideos}
            </div>
        );
    }
}

export default PlusVideosCard;