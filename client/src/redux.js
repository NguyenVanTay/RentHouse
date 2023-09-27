/** @format */

import rootReducer from "./store/reducers/rootReduces";
import { persistStore } from "redux-persist";
import { createStore } from "redux";

const reduxStore = () => {
  const store = createStore(rootReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};

export default reduxStore;
