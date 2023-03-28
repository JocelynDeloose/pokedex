const card = {
  width: "400px",
  padding: "1.5rem",
  backgroundColor: "lightgreen",
  borderRadius: "5px",
  boxShadow: "0px 0px 5px gray",
  color: "red",
  fontSize: "1.6rem",
  textAlign: "center",
  textShadow: "0px 0px 5px gray",
};

function PokemonCard() {
  const pokemon = pokemonList[1];
  return (
    <figure style={card}>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>)

}
export default PokemonCard;

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];