import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import {observable} from 'mobx'
import {observer} from 'mobx-react';
import autobind from 'autobind-decorator';

import SongStore from '../../stores/SongStore'

@autobind
@observer
class MediaPlayer extends Component {
  @observable src = null;
  @observable playing = false;
  @observable songs = [];

  async componentWillMount () {
    const songs = await SongStore.retrieve()
    this.songs = songs
    console.log(songs)
  }

  onClick (src) {
    this.src = src;
    this.playing = true;
  }

  onPlay () {
    console.log('playing')
    this.playing = !this.playing
  }

  render () {

    return (
      <div className="page">
        <h1>Media Player</h1>
        <h3>Song Title</h3>
        {this.songs.map((song) => {
          return (
            <div>
              <p onClick={this.onClick.bind(this, song.src)}>{song.title}</p>
            </div>
          )
        })}
        {
          this.src && <ReactPlayer
                       url={this.src}
                       playing={this.playing}
                       />
        }
      </div>
    )
  }
}

export default MediaPlayer;
