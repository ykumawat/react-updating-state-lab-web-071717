// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component{
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleClickResolution = () => {
    this.setState({
      settings: {...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  handleClickBitrate = () => {
    this.setState({
      settings: {...this.state.settings,
        bitrate: 12,
      }
    })
  }

  render() {
    return(
      <div>
        <button className="resolution" onClick={this.handleClickResolution}>Change Resolution</button>
        <button className="bitrate" onClick={this.handleClickBitrate}>Change Bitrate</button>
      </div>
    )}

}
