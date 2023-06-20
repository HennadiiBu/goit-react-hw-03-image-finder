import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchPixabay } from './Api/Api';
import Button from './BtnLoadMore/Button';

export default class App extends Component {
  state = {
    data: [],
    loader: false,
    searchQuery: '',
    page: 1,
    isVisibleBnt: false,
  };

  newUserQuery = query => {
    this.setState({
      searchQuery: query,
    });
    this.userSearchQuery();
  };

  async userSearchQuery() {
    try {
      const { hits } = await fetchPixabay(
        this.state.searchQuery,
        this.state.page
      );
      this.setState({
        data: hits,
      });
      this.setState({ isVisibleBnt: true });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <Searchbar newUserQuery={this.newUserQuery} />
        <ImageGallery resultQuery={this.state.data} />
        {this.state.isVisibleBnt && <Button />}
      </div>
    );
  }
}
