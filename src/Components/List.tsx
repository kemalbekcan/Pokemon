import React, { Fragment } from "react";
import PokemonList from "./PokemonList";

interface IProps {
  pokemons: any;
}

const List: React.FunctionComponent<IProps> = ({ pokemons }: IProps) => {
  return (
    <Fragment>
      <div className="w-100 d-flex flex-row flex-wrap">
        {pokemons.map((pokemon: any) => (
          <div className="col-lg-4">
            <PokemonList pokemon={pokemon} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};


export default List;
