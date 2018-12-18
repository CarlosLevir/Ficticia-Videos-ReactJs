import Axios from 'axios';

const urlTrailer = "https://www.googleapis.com/youtube/v3/channels?part=snippet,brandingSettings&id="
const urlVideos = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&order=date&channelId=";
const urlRelatedVideos = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&relatedToVideoId="
const descriptionUrl = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=";
const keySearch = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=12&order=date";
const username = "UC2pmfLm7iq6Ov1UwYrWYkZA";
const key = "&key=AIzaSyAcaePz1dy5eDJ0Ww0IrAUr2cT02asa7UE";

const getChannelVideos = (maxResults = 12) => {
    return Axios.get(urlVideos + username + "&maxResults=" + maxResults + key);
}

const getUnsubscribedTrailer = () => {
    return Axios.get(urlTrailer + username + key);
}

const getRelatedVideos = (spotlightVideoUrl) => {
    return Axios.get(urlRelatedVideos + spotlightVideoUrl + "&type=video&" + key);
}

const getFullDescriptionVideo = (videoId) => {
    return Axios.get(descriptionUrl + videoId + key);
}

const getSearchedVideos = (keyword) => {
    return Axios.get(keySearch + "&q=" + keyword + "&channelId=" + username +key);
}

export {getChannelVideos, getUnsubscribedTrailer, getRelatedVideos, getFullDescriptionVideo, getSearchedVideos};