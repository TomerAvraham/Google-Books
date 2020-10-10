import React, { Component } from "react";
import SearchAppBar from "./Components/SearchAppBar";
import BookList from "./Components/BookList";

export default class App extends Component {
  state = {
    books: [],
  };

  handelSearchButton = async (value) => {
    let response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${value}`
    )
    .catch(error => 
      this.setState({
        books: [],
      })
      )
    let data = await response.json();
    this.setState({
      books: data.items,
    });
  };

  render() {
    return (
      <div>
        <SearchAppBar position="static" HSbtn={this.handelSearchButton} />
        <div className="home">
        <BookList books={this.state.books} />
        </div>
        
      </div>
    );
  }
}
