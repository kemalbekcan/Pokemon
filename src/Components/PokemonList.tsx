import { connect } from "react-redux";
import React, { ChangeEvent, Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import EventButton from "./EventButton";
import { addFavourite } from "../actions/pokemonActions";

interface IProps {
  pokemon: {name: string, url: string};
  addFavourite: (pokemonIndex: string) => void;
  favourite: any;
}

const PokemonList = ({ pokemon, addFavourite, favourite }: IProps) => {
  const pokemonIndex =
    pokemon.url.split("/")[pokemon.url.split("/").length - 2];
  const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
  const [favo, setFavo] = useState(favourite);

  const like = () => {
    addFavourite(pokemonIndex);
    setFavo(pokemonIndex);
  };

  const dislike = () => {
    setFavo("");
  };
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

          {favo == pokemonIndex ? (
            <button className="btn btn-primary mx-3" onClick={dislike}>
              Liked
            </button>
          ) : (
            <button className="btn btn-primary mx-3" onClick={like}>
              Add Favourite
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
  addFavourite: bindActionCreators(addFavourite, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
