import { UPDATE_INFO } from "../../constant/actiontype"

let INI_STATE=""

let updateinforeducer=(state=INI_STATE,action)=>{
    switch(action.type){
        case UPDATE_INFO:
            return action.payload
            default:
                return state;
    }
}
export default updateinforeducer;