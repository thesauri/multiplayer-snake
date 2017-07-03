import Immutable from 'immutable';

const defaultState = Immutable.Map({
    0: [
        {
            x: 0,
            y: 0
        },
        {
            x: 1,
            y: 0
        },
        {
            x: 0,
            y: 1
        }
    ],
    1: [
        {
            x: 5,
            y: 2
        },
        {
            x: 5,
            y: 3
        },
        {
            x: 5,
            y: 4
        }
    ]
});

export default (state = defaultState, payload) => {
    switch (payload.type) {
        default:
            return state;
    }
};