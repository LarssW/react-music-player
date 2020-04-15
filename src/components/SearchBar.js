import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  onInputChange = evt => {
    this.setState({ term: evt.target.value });
  }

  onFormSubmit = evt => {
    evt.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-white navbar-dark">
        <div className="container">
          <form className="form-inline" onSubmit={this.onFormSubmit}>
            <input className="form-control mr-sm-2" value={this.state.term} onChange={this.onInputChange} type="text" placeholder="Search" />
            <button className="btn btn-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default SearchBar;