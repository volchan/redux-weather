import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props){
  	super(props);

    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  render(){
    return(
      <form className="input-group">
        <span className="input-group-addon">
          <i className="fas fa-search"></i>
        </span>
        <input
          className="form-control"
          placeholder="Get a five-day forcast in your favorite cities."
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">Search</button>
        </span>
      </form>
    );
  }
}

export default SearchBar;
