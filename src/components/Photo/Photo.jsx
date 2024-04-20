import React from 'react'

import './Photo-Style.css'

const Photo = ({data}) => {
  return (
    <div className="photos">
        <img src={data.urls.small} alt={data.alt_description} />
    </div>
  )
}

export default Photo