import PropTypes from 'prop-types';
import './Photo-Style.css';

const Photo = ({ photo, setPhotoZoom }) => {
    return (
        <div className="photos" onClick={() => setPhotoZoom(photo)}>
            <img src={photo.urls.small} alt={photo.alt_description} />
        </div>
    )
};

Photo.propTypes = {
    photo: PropTypes.shape({
        id: PropTypes.string,
        urls: PropTypes.shape({
            small: PropTypes.string
        }),
        alt_description: PropTypes.string
    }).isRequired,
    setPhotoZoom: PropTypes.func.isRequired,
};

export default Photo;