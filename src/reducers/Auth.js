import { SIGNOUT, LOGIN } from '../constants/ActionTypes';

const INIT_STATE = {
    token: localStorage.getItem("token"),
};

const auth = (state = INIT_STATE, action) => {
    switch (action.type) {

        case SIGNOUT: {
            return {
                ...state,
                token: null,
            };
        }

        case LOGIN: {
            return {
                ...state,
                token: "DUMMY_TOKEN"
            }
        }

        default:
            return state;
    }
};

export default auth;
