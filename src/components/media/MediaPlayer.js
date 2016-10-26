import React, {Component} from 'react';
import { Media, Player, controls } from 'react-media-player';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import autobind from 'autobind-decorator';

import SongStore from '../../stores/SongStore';

const {PlayPause, MuteUnmute} = controls;

@autobind
@observer
class MediaPlayer extends Component {
  @observable src = null;
  @observable playing = false;
  @observable songs = [];

  async componentWillMount () {
    const songs = await SongStore.retrieve();
    this.songs = songs;
    console.log(songs);
  }

  onClick (src) {
    this.src = src;
    this.playing = true;
  }

  onPlay () {
    console.log('playing');
    this.playing = !this.playing;
  }

  render () {

    return (
      <div className='page'>
        <h1>Media Player</h1>
        <h3>Song Title</h3>
        {this.songs.map((song) => {
          return (
            <Media>
              <div className='media'>
                <div className='media-player'>
                  <Player src={song.src}/>
                </div>
                <div className='media-controls'>
                  <PlayPause/>
                  <MuteUnmute/>
                </div>
              </div>
            </Media>
          );
        })}
      </div>
    );
  }
}

export default MediaPlayer;
