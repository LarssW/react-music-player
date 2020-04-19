import React from 'react';

const VideoItem = ({ video, onSelectVideo }) => {
  if (!video) {
    return <div>Loading</div>
  }
  return (
    <div onClick={() => onSelectVideo(video)} style={{
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 20,
      cursor: 'pointer'
    }}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        width="60%"
        height={video.snippet.thumbnails.medium.height}
      />
      <h5 style={{ paddingLeft: 10 }}>{video.snippet.title}</h5>
    </div>
  )
}

export default VideoItem;