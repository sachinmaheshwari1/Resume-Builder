import updateinforeducer from "./updateinforeducer";
import Sel_Template_Reducer from "./Sel_Template";
import { combineReducers } from "redux";
const rootreducer=combineReducers({
    updateinfos:updateinforeducer,
    Sel_Temp:Sel_Template_Reducer
})
export default rootreducer