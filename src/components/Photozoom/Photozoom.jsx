import React from 'react'

import './Photozoom-Style.css'

const Photozoom = ({photo, setPhotoZoom}) => {
  return (
    <div className="photo-zoom-backgrop" onClick={() => setPhotoZoom(null)}>
      <div className="photo-zoom-container">
        <img src={photo.urls.regular} alt={photo.alt_description} />
      </div>
    </div>
  )
}

export default Photozoom