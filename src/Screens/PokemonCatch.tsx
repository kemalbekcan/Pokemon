import axios from "axios";
import React, { Fragment, useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import Navbar from "../Components/Navbar";
import { bindActionCreators, Dispatch } from "redux";
import {
  catchPokemon,
  deletePokemon,
  allDeletePokemon,
} from "../actions/pokemonActions";
import Loading from "../Components/Loading";
import Error from "../Components/Error";

interface IProps {
  catchPokemon: any;
  pokeCatch: any;
  deletePokemon: (pokemon: string) => void;
  loading: boolean;
  allDeletePokemon: () => void;
  failedMessage: string;
}

const PokemonCatch = ({
  catchPokemon,
  pokeCatch,
  deletePokemon,
  loading,
  allDeletePokemon,
  failedMessage,
}: IProps) => {
  const [wildPokemon, setWildPokemon] = useState<any>(0);
  const pokeId = () => {
    const min = Math.ceil(1);
    const max = Math.ceil(151);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const encounterWildPokemon = useCallback(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeId()}`)
      .then((res) => {
        setWildPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    encounterWildPokemon();
  }, [encounterWildPokemon]);

  const onClick = () => {
    catchPokemon(wildPokemon.id);
    encounterWildPokemon();
  };

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="pokemonCatchBar mt-3 card rounded text-center"
              style={{ background: "#ef5350" }}
            >
              <div className="col-md-12">
                <img
                  src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${wildPokemon.id}.png?raw=true`}
                  alt={"Pokemon Avatar"}
                />
                <div>
                  <button
                    className="btn btn-primary shadow-none rounded mt-3 mb-3"
                    onClick={onClick}
                  >
                    Catch
                  </button>
                  <button
                    className="btn btn-primary shadow-none rounded mt-3 mb-3 mx-3"
                    onClick={() => allDeletePokemon()}
                  >
                    Delete All
                  </button>
                </div>
              </div>
            </div>
            {failedMessage && (
              <Error
                error={failedMessage}
                role={"alert"}
                className={"alert-danger"}
              />
            )}
            <div className="d-flex flex-wrap mx-auto">
              {pokeCatch &&
                pokeCatch.map((poks: any) => (
                  <div
                    className="card mt-3 mx-auto"
                    style={{ position: "relative" }}
                    key={poks.pokemon}
                  >
                    <img
                      className="d-flex flex-wrap"
                      src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${poks.pokemon}.png?raw=true`}
                      alt=""
                      style={{
                        border: "1px solid #ef5350",
                        display: "block",
                      }}
                    />
                    <p
                      style={{
                        position: "absolute",
                        right: "1px",
                        background: "red",
                        padding: "2px 10px",
                        cursor: "pointer",
                      }}
                      onClick={() => deletePokemon(poks.pokemon)}
                    >
                      x
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  pokeCatch: state.pokes.pokeCatch,
  loading: state.pokes.loading,
  failedMessage: state.pokes.failedMessage,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  catchPokemon: bindActionCreators(catchPokemon, dispatch),
  deletePokemon: bindActionCreators(deletePokemon, dispatch),
  allDeletePokemon: bindActionCreators(allDeletePokemon, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCatch);
