
import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { movieReducer, authReducer } from "./reducers";

const rootReducer = combineReducers({
  movieData: movieReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
