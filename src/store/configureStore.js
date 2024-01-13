import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import courses from "../state-management/src/create-course/reducer";

//root Reducer
const rootReducer = combineReducers({
  courses,
});

// REDUX DEV TOOLS
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Store
export const configureStore = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(reduxImmutableStateInvariant())) //middleware function call
); 

