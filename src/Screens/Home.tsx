import React, { Fragment } from "react";
import Pokemon from "./Pokemon";

interface IProps {
  getPokemons: () => void;
  pokemons: [];
  loading: boolean;
  failedMessage: string;
}

const Home: React.FunctionComponent<IProps> = () => {

  return (
    <Fragment>
          <Pokemon />
    </Fragment>
  );
};

export default Home;
