import React, { Fragment } from 'react';


const EventButton = ({addFavourite, pokemonIndex, favourite}: any) => {
    return (
        <Fragment>
            <button
            className="btn btn-primary mx-3"
            onClick={() => addFavourite(pokemonIndex)}
          >
            Add Favourite
          </button>
          {favourite && favourite == "1" ? "beğendin" : "beğen"}
        </Fragment>
    )
}

export default EventButton
