import Photo from '../Photo/Photo';
import PropTypes from 'prop-types';
import './Photolist-Style.css';

const Photolist = ({ photosList, setPhotoZoom }) => {
  return (
    <div className="album">
      {
        photosList.map((photo) => {
          return <Photo key={photo.id} photo={photo} setPhotoZoom={setPhotoZoom} />
        })
      }
    </div>
  )
};

Photolist.propTypes = {
    photosList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            urls: PropTypes.shape({
                small: PropTypes.string
            }),
            alt_description: PropTypes.string
        })
    ).isRequired,
    setPhotoZoom: PropTypes.func.isRequired,
};

export default Photolist;