import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchPixabay } from './Api/Api';
import Button from './BtnLoadMore/Button';
import * as basicLightbox from 'basiclightbox';
// import * as S from '../components/App.styled';
import {Container} from './App.styled'

export default class App extends Component {
  state = {
    data: [],
    loader: false,
    searchQuery: '',
    page: 1,

    totalHits: 0,
    pagesPerPage: 12,
  };

  newUserQuery = query => {
    this.setState({
      searchQuery: query,
      page: 1,
    });
  };

  async userSearchQuery() {
    try {
      const { hits, totalHits } = await fetchPixabay(
        this.state.searchQuery,
        this.state.page
      );
      this.setState({
        data: [...this.state.data, ...hits],
        totalHits: totalHits,
      });
    } catch (err) {
      console.log(err);
    }
  }

  loadMore = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchQuery !== prevState.searchQuery) {
      this.userSearchQuery();
    }
    if (this.state.page !== prevState.page) {
      this.userSearchQuery();
    }
  }

  clickToItem = itemId => {
    const data = this.state.data.find(elem => elem.id === parseInt(itemId));

    const instanse = basicLightbox.create(
      `      <div class="overlay">
        <div class="modal">
          <img src=${data.largeImageURL} alt=${data.tags} />
        </div>
      </div>`
    );
    instanse.show();
  };

  render() {
    const isVisibleBtn =
      this.state.data.length !== 0 &&
      this.state.data.length < this.state.totalHits;
    console.log(isVisibleBtn);

    return (
      <Container>
        <Searchbar newUserQuery={this.newUserQuery} />
        <ImageGallery
          resultQuery={this.state.data}
          clickToItem={this.clickToItem}
        />
        {isVisibleBtn && (
          <Button pageNum={this.state.page} loadMore={this.loadMore} />
        )}
     </Container>
    );
  }
}
