import React from 'react';

function ImageGalleryItem({ resultQuery, openFullScreenMode }) {

  // const clickOnItem=(event)=>{
  //   clickToItem(event.target.parentElement.id)

  // }
  return resultQuery.map(({ id, previewURL, tags, largeImageURL }) => {
    return (
      <li className="gallery-item" key={id} id={id} onClick={()=>openFullScreenMode(largeImageURL, tags)}>
        <img src={previewURL} alt={tags} />
      </li>
    );
  });
}

export default ImageGalleryItem;


