import React from 'react'
import Photo from '../Photo/Photo'

import './Photolist-Style.css'

const Photolist = ({photosList}) => {
  return (
    <div className="album">
      {
        photosList.map((photo) => {
          return <Photo key={photo.id} data={photo} />
        })
      }
    </div>
  )
}

export default Photolist