import React from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import youtube, { baseParams }  from './api/youtube';
import './App.css';

class App extends React.Component {
  state = { videos: [] };

  onFormSubmit = async value => {
    const response = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: value
      }
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    const { videos } = this.state;
    return (
      <div className="root">
        <SearchBar onSubmit={this.onFormSubmit} />
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <VideoList videos={videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
