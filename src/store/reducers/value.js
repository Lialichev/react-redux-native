import { value } from '../initialState';

const valueReducer = (state = value, action) => {
    switch (action.type) {
        case 'ADD_COUNT':
            return state + 1;
        default:
            return state;
    }
};

export default valueReducer;