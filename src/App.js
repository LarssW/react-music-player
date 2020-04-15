import React from 'react';
import SearchBar from './components/SearchBar';
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
    return (
      <div className="container">
        {this.state.videos.length}
        <SearchBar onSubmit={this.onFormSubmit} />
      </div>
    )
  }
}

export default App;
