import PropTypes from "prop-types";
function PokemonCard({pokemon}) {

   console.log(pokemon);
   
      // const pokemon = pokemonList[1]
   return <figure>

      {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt="" />: <p>???</p>}
      
      {console.log(pokemon.imgSrc)}
      <figcaption>{pokemon.name}</figcaption>
   </figure>

  /* {
name: "";
   imgSrc: "";
 }*/



}
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
  }).isRequired,
}
export default PokemonCard;







