import {
    GET_POKE_SUCCESS,
    GET_POKE_STATS,
    POKE_FAILED,
    POKE_STATS_FAILED,
    POKE_ABILITIES_SUCCESS,
    POKE_ABILITIES_FAILED,
    ADD_LIKE_SUCCESS,
    ADD_UNLIKE_SUCCESS,
    LIKE_FAILED,
    CATCH_POKEMON_SUCCESS,
} from '../actions/types';

interface IIinitialState {
    loading: boolean;
    pokemons: any;
    successMessage: string | null;
    failedMessage: string | null;
    stats: any;
    abilities: any;
    favourite: any;
    pokeCatch: any;
}

const initialState: IIinitialState = {
    loading: true,
    pokemons: [],
    successMessage: null,
    failedMessage: null,
    stats: [],
    abilities: [],
    favourite: [],
    pokeCatch: []
}

interface IPokeActions {
    type: typeof GET_POKE_SUCCESS;
    payload: any;
}

interface IPokeFailed {
    type: typeof POKE_FAILED;
    payload: string;
}

interface IPokeGetImage {
    type: typeof GET_POKE_STATS;
    payload: any;
}

interface IPokeErrFailed {
    type: typeof POKE_STATS_FAILED;
    payload: string;
}

interface IPokeAbilities {
    type: typeof POKE_ABILITIES_SUCCESS;
    payload: string;
}

interface IPokeAbilitiesFailed {
    type: typeof POKE_ABILITIES_FAILED;
    payload: string;
}

interface IPokeLikeSuccess {
    type: typeof ADD_LIKE_SUCCESS;
    payload: string;
}

interface IPokeUnlikeSuccess {
    type: typeof ADD_UNLIKE_SUCCESS;
    payload: any;
}

interface IPokeFavFailed {
    type: typeof LIKE_FAILED;
    payload: string;
}

interface IPokeCatchSuccess {
    type: typeof CATCH_POKEMON_SUCCESS;
    payload: string;
}

export type pokeActions = IPokeActions | IPokeFailed | IPokeGetImage | IPokeErrFailed | IPokeAbilities | IPokeAbilitiesFailed | IPokeLikeSuccess | IPokeUnlikeSuccess | IPokeFavFailed | IPokeCatchSuccess;


const pokeReducers = (state: IIinitialState = initialState, action: pokeActions) => {
    switch (action.type) {
        case GET_POKE_SUCCESS:
            return {
                ...state,
                pokemons: action.payload,
                loading: false,
                successMessage: "Success"
            }
        case ADD_LIKE_SUCCESS:
            return {
                ...state,
                favourite: [action.payload, ...state.favourite],
                loading: false,
            }
        case ADD_UNLIKE_SUCCESS:
            return {
                ...state,
                favourite: state.favourite.filter((fav: any) => fav.id !== action.payload.id)
            }
        case LIKE_FAILED:
            return {
                ...state,
                failedMessage: 'Something went wrong',
                loading: false
            }
        case GET_POKE_STATS:
            return {
                ...state,
                stats: action.payload,
                loading: false
            }
        case POKE_FAILED:
            return {
                ...state,
                loading: false,
                failedMessage: 'Something went wrong !'
            }
        case POKE_STATS_FAILED:
            return {
                ...state,
                loading: false,
                failedMessage: 'Image upload error !'
            }
        case POKE_ABILITIES_SUCCESS:
            return {
                ...state,
                loading: false,
                abilities: action.payload
            }
        case POKE_ABILITIES_FAILED:
            return {
                ...state,
                loading: false,
                failedMessage: 'Something went wrong !'
            }
        case CATCH_POKEMON_SUCCESS:
            return {
                ...state,
                loading: false,
                pokeCatch: [action.payload, ...state.pokeCatch]
            }
        default:
            return state;
    }
}


export default pokeReducers;