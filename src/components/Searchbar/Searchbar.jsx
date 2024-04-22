import React from 'react'
import SimpleButton from '../buttons/SimpleButton/SimpleButton'

import './Searchbar-Style.css'

const Searchbar = ({setQuery, setCategory, setActivateSearch}) => {

  const categories = [
    "Natureza",
    "Pessoas",
    "Tecnologia",
    "Animais",
    "Esportes"
  ]

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
}

export default Searchbar