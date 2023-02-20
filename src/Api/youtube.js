import axios from 'axios';
const KEY='AIzaSyBMfwe3DsPUpFxDGi5lDmOMEHoDAIOMTGk';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type: 'video',
        maxResults:10,
        key:KEY
    }
});