import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'





function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);
  const handleNext = () => {
    if (pokemonIndex == pokemonList.length - 1) {
      setpokemonIndex(pokemonList.length - 1)
    } else {
      setpokemonIndex(pokemonIndex + 1)
    }
  };
  const handleBefore = () => {
    if (pokemonIndex == 0) {
      setpokemonIndex(0)
    } else {
      setpokemonIndex(pokemonIndex - 1)
    }
  };
  return (
    <>
      <div className="App">
        <div> <PokemonCard
          pokemon={pokemonList[pokemonIndex]} /></div>
      </div >
      <p>{pokemonIndex}</p>
      {pokemonIndex > 0 && <button onClick={handleBefore}>Previous</button>}
      {pokemonIndex < pokemonList.length - 1 && <button onClick={handleNext}>Next</button>}
    </>
  )
}




const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
export default App
