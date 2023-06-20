import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    return (
      <ul className="gallery">
        <ImageGalleryItem resultQuery={this.props.resultQuery} />
      </ul>
    );
  }
}
