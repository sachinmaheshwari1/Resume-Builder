import { UPDATE_INFO } from "../../constant/actiontype";

function updateinfo(input){
    return{
        type:UPDATE_INFO,
        payload:input
    }
}
export default updateinfo;