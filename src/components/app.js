import React, { Component } from 'react';
import SearchBar from "../containers/search_bar";

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <SearchBar />
        </div>
      </div>
    );
  }
}
