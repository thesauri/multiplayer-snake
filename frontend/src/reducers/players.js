import Immutable from 'immutable';

const defaultState = Immutable.Map({
    1: {
        color: 'blue'
    },
    2: {
        color: 'blue'
    }
});

export default (state = defaultState, payload) => {
    switch (payload.type) {
        default:
            return state;
    }
}