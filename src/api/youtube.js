import axios from 'axios';

const KEY = 'AIzaSyDkI_RZjcrMDtMTowJ0eHN3E3S7YgnWDYI';

export const baseParams = {
  part: 'snippet',
  maxResults: 10,
  key: KEY,
};

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});