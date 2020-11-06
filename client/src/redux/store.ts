import { AppState } from "./types";
import { createStore, applyMiddleware, compose } from "redux";
import { createRootReducer } from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from './saga/index'
const appState: AppState = {
  authReducer: {
    isLoggedIn: false,
    isLoading: true,
    formData: {},
    error: {},
    user:{}
  },
};
export default function makeStore(initialState = appState) {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    let composeEnhancers = compose;
  
    if (process.env.NODE_ENV === "development") {
      if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
      }
    }
  
    const store = createStore(
      createRootReducer(),
      initialState,
      composeEnhancers(applyMiddleware(...middlewares))
    );
    sagaMiddleware.run(rootSaga)
    if ((module as any).hot) {
        (module as any).hot.accept("./reducers", () => {
          const nextReducer = require("./reducers").default;
          store.replaceReducer(nextReducer);
        });
      }
    
      return store;
    }