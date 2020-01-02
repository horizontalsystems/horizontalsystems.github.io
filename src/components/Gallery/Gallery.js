import React from 'react'
import './Gallery.scss'

function Gallery() {
  const images = [...Array(20)].map(((_, i) =>
      <a href={`/images/gallery/${i + 1}.JPG`} key={i} data-fancybox="g" className={`gallery-item-${i + 1}`}>
        <img src={`/images/gallery/${i + 1}.JPG`} alt="Gallery 1" className="gallery-img" />
      </a>
  ))

  return (
    <div className="Gallery">
      {images}
    </div>
  )
}

export default Gallery
