import {
  GET_POKE_SUCCESS,
  POKE_FAILED,
  GET_POKE_STATS,
  POKE_STATS_FAILED,
  POKE_ABILITIES_SUCCESS,
  POKE_ABILITIES_FAILED,
  ADD_FAVOURITE_SUCCESS,
  ADD_FAVOURITE_FAILED,
  CATCH_POKEMON_SUCCESS,
  CATCH_POKEMON_FAILED
} from "./types";
import axios from "axios";
import { Dispatch } from "redux";

interface IResults {
  [results: string]: { name: string; url: string };
}

export const getPokemons = () => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get<IResults>(
      "https://pokeapi.co/api/v2/pokemon/"
    );
    dispatch({ type: GET_POKE_SUCCESS, payload: res.data.results });
  } catch (err) {
    dispatch({ type: POKE_FAILED, payload: err });
  }
};

export const getPokemonStat = (id: any) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    dispatch({ type: GET_POKE_STATS, payload: res.data.stats });
  } catch (err) {
    dispatch({ type: POKE_STATS_FAILED, payload: err });
  }
};

export const getPokemonAbilities =
  (name: any) => async (dispatch: Dispatch) => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/stat/${name}/`);
      dispatch({
        type: POKE_ABILITIES_SUCCESS,
        payload: res.data.characteristics,
      });
    } catch (err) {
      dispatch({ type: POKE_ABILITIES_FAILED, payload: err });
    }
  };

  export const addFavourite = (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ADD_FAVOURITE_SUCCESS, payload: {id} });
    } catch (err) {
      dispatch({type: ADD_FAVOURITE_FAILED, payload: err})
    }
  };

  export const catchPokemon = (pokemon: any) => async (dispatch: Dispatch) => {
    try {
      dispatch({type: CATCH_POKEMON_SUCCESS, payload: {pokemon}})
    } catch (err) {
      dispatch({type: CATCH_POKEMON_FAILED, payload: err})
    }
  }
