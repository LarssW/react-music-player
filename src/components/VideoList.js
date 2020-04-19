import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {

  renderItems = () => {
    return this.props.videos.map((item, index) => {
      return <VideoItem video={item} key={index} onSelectVideo={this.props.onSelectVideo} />
    });
  }

  render() {
    return (
      <div>{this.renderItems()}</div>
    );
  }
};

export default VideoList;