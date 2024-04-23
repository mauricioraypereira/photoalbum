import PropTypes from 'prop-types';
import './Photozoom-Style.css';

const Photozoom = ({ photo, setPhotoZoom }) => {
    return (
        <div className="photo-zoom-backgrop" onClick={() => setPhotoZoom(null)}>
            <div className="photo-zoom-container">
                <img src={photo.urls.regular} alt={photo.alt_description} />
            </div>
        </div>
    )
};

Photozoom.propTypes = {
    photo: PropTypes.shape({
        id: PropTypes.string,
        urls: PropTypes.shape({
            regular: PropTypes.string
        }),
        alt_description: PropTypes.string
    }).isRequired,
    setPhotoZoom: PropTypes.func.isRequired,
};

export default Photozoom;