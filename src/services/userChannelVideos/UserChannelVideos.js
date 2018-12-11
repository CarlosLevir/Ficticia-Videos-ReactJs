import Axios from 'axios';

const url = "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=";
const username = "UCuhVlANZXUATGv1dRmwcUzA";
const key = "key={API_KEY}";

const getChannelVideos = () => {
    return Axios.get(url + username + "&" + key);
}

export default getChannelVideos;