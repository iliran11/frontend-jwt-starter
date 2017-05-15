import { SUCCESS_AUTH, FAILURE_AUTH } from '../actions/types.js';
export default (state = {}, action) => {
    switch (action.type) {
        case SUCCESS_AUTH:
            return { authenticated: true };
        case FAILURE_AUTH:
            return { authenticated: false }
        default:
            return state;
    }
}