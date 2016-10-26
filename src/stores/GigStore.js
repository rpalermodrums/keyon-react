import {action} from 'mobx';
import autobind from 'autobind-decorator';
import AppConstants from '../constants/AppConstants';
import Axios from 'axios';

const {
  GET_GIGS_URL,
} = AppConstants;

@autobind
class GigStore {

  @action
  async retrieve () {
    const response = await Axios.get(GET_GIGS_URL);
    return response.data.gigs;
  }
}

export default (new GigStore());
