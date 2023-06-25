import React, { Component } from 'react';

export default class Button extends Component {
  state = {
    page: this.props.pageNum,
  };

  ClickLoadMore = () => {
    this.props.loadMore();
  };

  render() {
    return <button onClick={this.ClickLoadMore}>Load more...</button>;
  }
}
