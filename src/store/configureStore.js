import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import courses from "../state-management/src/create-course/reducer";

//root Reducer
const rootReducer = combineReducers({
  courses,
});

//Store
export default function configureStore(initialState) {
  // REDUX DEV TOOLS

  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(reduxImmutableStateInvariant())) //middleware function call
  );
}
