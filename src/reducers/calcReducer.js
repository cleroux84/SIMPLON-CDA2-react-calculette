import { generateNumber } from "../actions/actions";
import { calc } from "../sevices/calc";
import {randomNumber} from "../sevices/randomNumber";

const INITIAL_STATE =  {
    number1: '',
    number2: '',
    operator: '',
    result: '0',
    loader: false
};

const calcReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_INPUT_1':
            return {
               ...state,
               number1:action.value
            };
        case 'UPDATE_INPUT_2':
            return {
                ...state,
               number2:action.value
            }
        case 'CHANGE_OPERATOR':
            return {
                ...state,
               operator:action.value
            }
        case 'CALCULATE':
            return {
                ...state,
                result: calc(state.number1, state.number2, state.operator)
            }
        case 'GENERATE_NUMBER':
            return {
                ...state,
                number1:randomNumber()
            }
        case 'UPDATE_LOADER':
            return {
                ...state,
                loader:action.value
            }
        case 'UPDATE_INPUT_1_WITH_THUNK':
            return {
                ...state,
                number1:action.value
            }
        default:
            return state
    }
}

export default calcReducer;