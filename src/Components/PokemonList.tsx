import { connect } from "react-redux";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import { addLike, addUnlike } from "../actions/pokemonActions";

interface IProps {
  pokemon: {name: string, url: string};
  addLike: (pokemonIndex: string) => void;
  addUnlike: (pokemonIndex: string) => void;
  favourite: any;
}

const PokemonList = ({ pokemon, addLike, addUnlike, favourite }: IProps) => {
  const pokemonIndex =
    pokemon.url.split("/")[pokemon.url.split("/").length - 2];
  const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

  return (
    <Fragment>
      <div className="card mx-auto mx-auto mt-3" style={{ width: "80%" }}>
        <img
          className="card-img-top img-fluid text-center"
          src={imageUrl}
          alt="Cards"
        />
        <div className="card-body">
          <h5 className="card-title">{pokemon.name.toUpperCase()}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="d-flex flex-wrap mx-auto justify-content-center">
          <Link to={`/details/${pokemonIndex}`} className="btn btn-primary">
            Go details
          </Link>
            {favourite.filter((fav: { id: string; }) => fav.id === pokemonIndex).length > 0 ? (
                <button className="btn btn-primary shadow-none mx-3" onClick={() => addUnlike(pokemonIndex)}>
                  like
                </button>
            ) : (
                <button className="btn btn-primary shadow-none mx-3" onClick={() => addLike(pokemonIndex)}>
                  Unlike
                </button>
            )}

          </div>
          
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  favourite: state.pokes.favourite,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addLike: bindActionCreators(addLike, dispatch),
  addUnlike: bindActionCreators(addUnlike, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
