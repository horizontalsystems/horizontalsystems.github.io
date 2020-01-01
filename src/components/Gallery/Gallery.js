import React from 'react'
import './Gallery.scss'

function Gallery() {
  const images = [...Array(20)].map(((_, i) =>
      <div key={i} className={`gallery-item gallery-item-${i + 1}`}>
        <img src={`/images/gallery/${i + 1}.JPG`} alt="Gallery 1" className="gallery-img" />
      </div>
  ))

  return (
    <div className="Gallery">
      {images}
    </div>
  )
}

export default Gallery
