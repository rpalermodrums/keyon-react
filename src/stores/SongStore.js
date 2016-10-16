import {observable, action} from 'mobx';
import autobind from 'autobind-decorator';
import AppConstants from '../constants/AppConstants';
import Axios from 'axios';

const {
  GET_SONGS_URL,
} = AppConstants;

@autobind
class SongStore {

  @action
  async retrieve () {
    const songs = await Axios.get(GET_SONGS_URL);
    return songs.data.recordings;
  }
}

export default (new SongStore)
