import { combineReducers, createStore } from "redux";
import baiTapDatVeReducer from "./baiTapDatVeReducer";

const rootReducer = combineReducers({baiTapDatVeReducer});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());