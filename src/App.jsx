import Photolist from './components/Photolist/Photolist';
import Photozoom from './components/Photozoom/Photozoom';
import Searchbar from './components/Searchbar/Searchbar';

import axios from 'axios';

import { useState, useEffect } from 'react';

function App() {

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [photos, setPhotos] = useState([]);
  const [photoZoom, setPhotoZoom] = useState(null);
  const [activateSearch, setActivateSearch] = useState(false);


  const fetchData = async({query, category}) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
    
    if (query || category) {
      let searchQuery = query;
      if (query || category) {
        searchQuery = `${query} ${category}`;
      } else if (category) {
        searchQuery = category;
      }
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          client_id: apiKey,
          query: searchQuery,
        },
      });

      setPhotos(response.data.results);
      return;
    }

    const response = await axios.get('https://api.unsplash.com/photos/random/', {
      params: {
        client_id: apiKey,
        count: 20,
      }
    });

    setPhotos(response.data);
  };

  useEffect(() => {
    fetchData(query, category)
  }, [])

  useEffect(() => {
    if (activateSearch) {
      fetchData({query, category});
      setActivateSearch(false);
    }
  }, [activateSearch])

  return (
    <div className="main-container">
      <Searchbar 
        setQuery={setQuery} 
        setCategory={setCategory} 
        setActivateSearch={setActivateSearch} 
      />
      <Photolist 
        photosList={photos} 
        setPhotoZoom={setPhotoZoom}  
      />
      { photoZoom && (
        <Photozoom 
          photo={photoZoom} 
          setPhotoZoom={setPhotoZoom}
        />)
      }
    </div>
  )
}

export default App;
