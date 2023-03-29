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

function PokemonCard(props) {

  return (
    <figure style={card}>
      {props.imgSrc ? (
        <img src={props.imgSrc} alt={props.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{props.name}</figcaption>
    </figure>)

}
export default PokemonCard;

