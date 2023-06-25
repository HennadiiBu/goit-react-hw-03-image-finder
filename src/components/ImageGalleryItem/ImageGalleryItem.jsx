import React from 'react';

function ImageGalleryItem({ resultQuery, clickToItem }) {

  const clickOnItem=(event)=>{
    clickToItem(event.target.parentElement.id)

  }
  return resultQuery.map(({ id, previewURL, tags }) => {
    return (
      <li className="gallery-item" key={id} id={id}onClick={clickOnItem}>
        <img src={previewURL} alt={tags} />
      </li>
    );
  });
}

export default ImageGalleryItem;

// import React, { Component } from 'react'
// clickOnItem=(event)=>{
//   this.props.clickToItem(event.target.key)
// }
// export default class ImageGalleryItem extends Component {
//   render() {
//     return this.props.resultQuery.map(({ id, previewURL, tags }) => {
//       return (
//         <li className="gallery-item" key={id} onClick={clickOnItem}>
//           <img src={previewURL} alt={tags} />
//         </li>
//       );
//     });
// }
