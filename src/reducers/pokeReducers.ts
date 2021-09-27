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
    DELETE_CATCH_POKEMON,
    ALL_DELETE_CATCH_POKEMON
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
    pokeCatch: [],
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

interface IPokeDeleteCatchSuccess {
    type: typeof DELETE_CATCH_POKEMON;
    payload: any;
}

interface IPokeAllDeleteCatchSuccess {
    type: typeof ALL_DELETE_CATCH_POKEMON;
    payload: any;
}

export type pokeActions = IPokeActions | IPokeFailed | IPokeGetImage | IPokeErrFailed | IPokeAbilities | IPokeAbilitiesFailed | IPokeLikeSuccess | IPokeUnlikeSuccess | IPokeFavFailed | IPokeCatchSuccess | IPokeDeleteCatchSuccess | IPokeAllDeleteCatchSuccess;


const pokeReducers = (state: IIinitialState = initialState, action: pokeActions) => {
    switch (action.type) {
        case GET_POKE_SUCCESS:
            return {
                ...state,
                pokemons: action.payload,
                successMessage: "Success",
                loading: false,
            }
        case ADD_LIKE_SUCCESS:
            localStorage.setItem("like", JSON.stringify([action.payload, ...state.favourite]))
            return {
                ...state,
                favourite: [action.payload, ...state.favourite],
                loading: false,
            }
        case ADD_UNLIKE_SUCCESS:
            localStorage.setItem("like", JSON.stringify(state.favourite.filter((fav: any) => fav.id !== action.payload.id)))
            return {
                ...state,
                favourite: state.favourite.filter((fav: any) => fav.id !== action.payload.id),
                loading: false
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
                failedMessage: 'Something went wrong !',
                loading: false,
            }
        case POKE_STATS_FAILED:
            return {
                ...state,
                failedMessage: 'Image upload error !',
                loading: false
            }
        case POKE_ABILITIES_SUCCESS:
            return {
                ...state,
                abilities: action.payload,
                loading: false,
            }
        case POKE_ABILITIES_FAILED:
            return {
                ...state,
                failedMessage: 'Something went wrong !',
                loading: false,
            }
        case CATCH_POKEMON_SUCCESS:
            return {
                ...state,
                pokeCatch: [action.payload, ...state.pokeCatch],
                loading: false,
            }
        case DELETE_CATCH_POKEMON:
            return {
                ...state,
                pokeCatch: state.pokeCatch.filter((item: any) => item.pokemon !== action.payload.pokemon),
                loading: false
            }
        case ALL_DELETE_CATCH_POKEMON:
            return {
                ...state,
                pokeCatch: [],
                loading: false
            }
        default:
            return state;
    }
}


export default pokeReducers;