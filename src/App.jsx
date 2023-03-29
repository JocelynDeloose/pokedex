import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'




function App() {
  const pokemon = pokemonList[0];
  return (
    <div className="App">

      <div> <PokemonCard
        name={pokemon.name}
        imgSrc={pokemon.imgSrc} /></div>

    </div >
  )
}
const pokemonList = [
  {
    name: "Bulbizar",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];
export default App
