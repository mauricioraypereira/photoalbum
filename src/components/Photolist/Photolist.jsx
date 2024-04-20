import React from 'react'
import Photo from '../Photo/Photo'

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