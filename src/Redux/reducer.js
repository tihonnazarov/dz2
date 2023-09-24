const initialState = {
    firstNumber: '',
    secondNumber: '',
    result: null,
};

const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FIRST_NUMBER':
            return {
                ...state,
                firstNumber: action.payload,
            };
        case 'SET_SECOND_NUMBER':
            return {
                ...state,
                secondNumber: action.payload,
            };
        case 'SET_RESULT':
            return {
                ...state,
                result: action.payload,
            };
        default:
            return state;
    }
};

export default calculatorReducer;

