const NavBar = ({ pokemonIndex, setpokemonIndex, pokemonList }) => {
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
      {pokemonIndex > 0 && <button onClick={handleBefore}>Previous</button>}
      {pokemonIndex < pokemonList.length - 1 && <button onClick={handleNext}>Next</button>}

    </>
  );
}
export default NavBar;