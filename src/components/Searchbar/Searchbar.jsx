import SimpleButton from '../buttons/SimpleButton/SimpleButton';
import PropTypes from 'prop-types';
import './Searchbar-Style.css';

const Searchbar = ({ setQuery, setCategory, setActivateSearch }) => {
    const categories = [
        "Natureza",
        "Pessoas",
        "Tecnologia",
        "Animais",
        "Esportes"
    ];

    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder='Pesquisar fotos...' 
                onChange={(e) => setQuery(e.target.value)} 
            />
            <SimpleButton content="Pesquisar" onClick={() => setActivateSearch(true)}/>
            <select 
                onChange={(e) => {
                setCategory(e.target.value);
                setActivateSearch(true);
                }}
            >
                {categories.map((category) => {
                    return <option key={category} value={category}>
                        {category}
                    </option>
                })}
            </select>
        </div>
    )
};

Searchbar.propTypes = {
  setQuery: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
  setActivateSearch: PropTypes.func.isRequired,
};

export default Searchbar;