import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import DescriptionVideoCard from '../descriptionVideoCard/DescriptionVideoCard';
import * as YoutubeService from '../../services/youtubeServices/YoutubeServices';

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80%'
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class ModalCard extends Component {
  state = {
    open: true,
    videoDescription: null
  };

  handleOpen = () => {
    this.setState({
        open: true
    });
  };

  handleClose = () => {
    this.setState({
        open: false
    },
    () => {
        this.props.hideModal();
    }
  )}

  componentDidMount = () => {
    YoutubeService.getFullDescriptionVideo(this.props.video).then((response) => {
      this.setState({
        videoDescription: response.data.items[0].snippet.description,
      })
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <iframe
            title="Modal Video"
            width="100%"
            height="315"
            src={"https://www.youtube.com/embed/" + this.props.video}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
            </iframe>
            <DescriptionVideoCard
            videoDescription={this.state.videoDescription}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

ModalCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ModalCardWrapped = withStyles(styles)(ModalCard);

export default ModalCardWrapped;