import { applyMiddleware, compose, createStore } from "redux";
import rootreducer from "../reducer";
import thunk from "redux-thunk"

const store=createStore(rootreducer,compose(applyMiddleware(thunk)))

export default store;