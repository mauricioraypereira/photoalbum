import React from 'react'
import SimpleButton from '../buttons/SimpleButton/SimpleButton'

import './Searchbar-Style.css'

const Searchbar = () => {

  const categories = [
    "Natureza",
    "Pessoas",
    "Tecnologia",
    "Animais",
    "Esportes"
  ]

  return (
    <div className="search-bar">
      <input type="text" placeholder='Pesquisar fotos...' />
      <SimpleButton content="Pesquisar"/>
      <select>
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