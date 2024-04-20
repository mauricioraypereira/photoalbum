import Photolist from './components/Photolist/Photolist';
import Photozoom from './components/Photozoom/Photozoom';
import Searchbar from './components/Searchbar/Searchbar';

import axios from 'axios';

import { useState, useEffect } from 'react';

function App() {

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [photos, setPhotos] = useState([]);

  const fetchData = async({query, category}) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
    
    const response = await axios.get('https://api.unsplash.com/photos/random/', {
      params: {
        client_id: apiKey,
        count: 10,
      }
    });

    setPhotos(response.data);
  };

  useEffect(() => {
    fetchData(query, category)
  }, [])

  return (
    <div className="main-container">
      <Searchbar />
      <Photolist photosList={photos}/>
      <Photozoom />
    </div>
  )
}

export default App;
