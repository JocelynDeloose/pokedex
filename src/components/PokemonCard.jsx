import PropTypes from "prop-types";

const card = {
  width: "600px",
  padding: "1.5rem",
  backgroundColor: "lightgreen",
  borderRadius: "5px",
  boxShadow: "0px 0px 5px gray",
  color: "red",
  fontSize: "1.6rem",
  textAlign: "center",
  textShadow: "0px 0px 5px gray",
};

function PokemonCard({ pokemon }) {

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

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
}


export default PokemonCard;

