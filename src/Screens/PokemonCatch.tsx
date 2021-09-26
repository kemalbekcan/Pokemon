import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import Navbar from "../Components/Navbar";
import { bindActionCreators, Dispatch } from "redux";
import { catchPokemon } from '../actions/pokemonActions';

interface IProps {
  catchPokemon: any;
  pokeCatch: any;
}

const PokemonCatch = ({catchPokemon, pokeCatch}: IProps) => {
  const [wildPokemon, setWildPokemon] = useState<any>(0);
  const pokeId = () => {
    const min = Math.ceil(1);
    const max = Math.ceil(151);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const encounterWildPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId()}`).then((res) => {
      setWildPokemon(res.data);
    });
  };
  useEffect(() => {
    encounterWildPokemon();
  }, []);

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
            <div className="mt-3">
              <div className="card">
                <div className="container">
                  <div className="row">
                    <div
                      className="col-md-12"
                      style={{ background: "#ef5350" }}
                    >
                      <div className="text-center">
                        <img
                          src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${wildPokemon.id}.png?raw=true`}
                          alt={"Pokemon Avatar"}
                        />
                        <div>
                          <button className="btn btn-primary mt-3 mb-3" onClick={onClick}>
                            Catch
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap mx-auto">
                {pokeCatch && pokeCatch.map((poks: any) => (
                  <div className="card mt-3 mx-auto">
                    <img className="d-flex flex-wrap" src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${poks.pokemon}.png?raw=true`} alt="" style={{border: "1px solid #ef5350", display:"block"}} />
                  </div>
                ))}
               {/* {pokeCatch && pokeCatch.map((poke: any) => {
                 return <div>
                   {poke.pokemon}
                   <img src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${poke.pokemon}.png?raw=true`} alt="" />
                 </div>
               })} */}
              </div>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCatch);
