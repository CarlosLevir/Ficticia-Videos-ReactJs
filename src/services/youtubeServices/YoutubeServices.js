import Axios from 'axios';

const urlTrailer = "https://www.googleapis.com/youtube/v3/channels?part=snippet,brandingSettings&id="
const urlVideos = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&channelId=";
const username = "UC2pmfLm7iq6Ov1UwYrWYkZA";
const key = "key=AIzaSyAcaePz1dy5eDJ0Ww0IrAUr2cT02asa7UE";

const getChannelVideos = () => {
    return Axios.get(urlVideos + username + "&" + key);
}

const getUnsubscribedTrailer = () => {
    return Axios.get(urlTrailer + username + "&" + key);
}

export {getChannelVideos, getUnsubscribedTrailer};