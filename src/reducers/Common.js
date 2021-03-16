import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from '../constants/ActionTypes';

const INIT_STATE = {
    error: '',
    loading: false,
};

const common = (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_START: {
            return {
                ...state,
                loading: true,
            };
        }
        case FETCH_SUCCESS: {
            return {
                ...state,
                error: false,
                loading: false,
            };
        }

        case FETCH_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            };
        }
        default:
            return state;
    }
};

export default common;
