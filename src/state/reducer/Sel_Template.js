import { TEMPLATE_1,TEMPLATE_2,TEMPLATE_3,TEMPLATE_4 } from "../../constant/actiontype";

const INIT_STATE = TEMPLATE_1;
function Sel_Template_Reducer(state=INIT_STATE,action){
    switch(action.type){
        case TEMPLATE_1:
            return TEMPLATE_1;
            case TEMPLATE_2:
                return TEMPLATE_2
                case TEMPLATE_3:
                    return TEMPLATE_3
                    case TEMPLATE_4:
                        return TEMPLATE_4
            
                default:
                    return state
    }

}
export default Sel_Template_Reducer;