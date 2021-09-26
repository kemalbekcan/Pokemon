import React, { Fragment, useEffect, useState } from "react";
import Skill from "../Components/Skill";
import { connect } from "react-redux";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import Navbar from "../Components/Navbar";
import { bindActionCreators, Dispatch } from "redux";
import { getPokemonStat } from "../actions/pokemonActions";
import axios from 'axios';

interface IProps {
  match: any;
  getPokemonStat: (id: number) => void;
  stats: any;
  loading: boolean;
  failedMessage: string;
}

const Details: React.FunctionComponent<IProps> = ({
  match,
  getPokemonStat,
  stats,
  loading,
  failedMessage,
}) => {
  const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${match.params.id}.png?raw=true`;
  useEffect(() => {
    getPokemonStat(match.params.id);
  }, [getPokemonStat, match.params.id]);

  const [name, setName] = useState<string>();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
    .then(res => {
setName(res.data.name)
    })
    .catch(err => {
      console.log(err)
    })
  }, [match.params.id])

  return loading || stats === null ? (
    <Loading />
  ) : (
    <Fragment>
      <Navbar />
      <div className="mt-4">
        <div className="container" style={{ width: "60%" }}>
          {failedMessage && (
            <Error
              error={failedMessage}
              role={"alert"}
              className={"alert-danger"}
            />
          )}
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="text-center">
                  <img
                    className="img-fluid"
                    src={imageUrl}
                    width="200"
                    height="200"
                    alt={match.params.id}
                  />
                  <h4 className="mb-5">{name?.toUpperCase()}</h4>
                </div>

                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      {stats.map((statPoke: any) => (
                        <Skill statPoke={statPoke} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  stats: state.pokes.stats,
  loading: state.pokes.loading,
  failedMessage: state.pokes.failedMessage,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getPokemonStat: bindActionCreators(getPokemonStat, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
