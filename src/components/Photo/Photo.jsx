import React from 'react'

import './Photo-Style.css'

const Photo = ({data, setPhotoZoom}) => {
  return (
    <div className="photos" onClick={() => setPhotoZoom(data)}>
        <img src={data.urls.small} alt={data.alt_description} />
    </div>
  )
}

export default Photo