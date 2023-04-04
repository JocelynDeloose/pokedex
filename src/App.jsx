import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from "./components/NavBar"
import { useEffect } from 'react'




function App() {
  useEffect(() => { alert("Hello Pokemon trainer :) !!!!") }, []);
  const [pokemonIndex, setpokemonIndex] = useState(0);

  return (
    <>
      <div><NavBar pokemonIndex={pokemonIndex} setpokemonIndex={setpokemonIndex} pokemonList={pokemonList} /></div>
      <div className="App">
        <div> <PokemonCard
          pokemon={pokemonList[pokemonIndex]} /></div>
      </div >
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
