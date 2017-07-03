import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    0: {
        color: '#3498db'
    },
    1: {
        color: '#2ecc71'
    }
});

export default (state = defaultState, payload) => {
    switch (payload.type) {
        default:
            return state;
    }
}