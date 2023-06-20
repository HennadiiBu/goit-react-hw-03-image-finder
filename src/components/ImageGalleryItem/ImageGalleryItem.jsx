import React from 'react';

function ImageGalleryItem({ resultQuery }) {
  return resultQuery.map(({ id, previewURL, tags }) => {
    return (
      <li className="gallery-item" key={id}>
        <img src={previewURL} alt={tags} />
      </li>
    );
  });
}

export default ImageGalleryItem;
