import React, { Fragment, useState } from "react";
import Pokemon from "./Pokemon";
import { Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from '../Components/themes';

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
      {/* <Pokemon />  */}
    </Fragment>
  );
};

export default Home;
