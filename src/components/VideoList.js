import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {

  renderItems = () => {
    return this.props.videos.map((item, index) => {
      return <VideoItem video={item} key={index} />
    });
  }

  render() {
    return (
      <div>{this.renderItems()}</div>
    );
  }
};

export default VideoList;