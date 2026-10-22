
const initialState = {
  movies: [],
  movie: null,
  loading: false,
  error: null,
};

export function movieReducer(state = initialState, action) {
  switch (action.type) {
    case "MOVIES_LOADING":
      return { ...state, loading: true, error: null };
    case "MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
        error: null,
      };
    case "MOVIES_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "DETAILS_LOADING":
      return { ...state, loading: true, error: null };
    case "DETAILS_SUCCESS":
      return {
        ...state,
        loading: false,
        movie: action.payload,
        error: null,
      };
    case "DETAILS_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function authReducer(
  state = { user: null, favorites: [] },
  action
) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "TOGGLE_FAVORITE": {
      const exists = state.favorites.some(
        (movie) => movie.id === action.payload.id
      );

      return {
        ...state,
        favorites: exists
          ? state.favorites.filter(
              (movie) => movie.id !== action.payload.id
            )
          : [...state.favorites, action.payload],
      };
    }
    default:
      return state;
  }
}
