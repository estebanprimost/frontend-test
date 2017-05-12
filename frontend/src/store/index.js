import 'whatwg-fetch';

const url = 'http://localhost:3000';

const doFetch = (endpoint, params) => fetch(
    `${url}/${endpoint}`
).then(r => r.json());

const buildStore = props => {
    return {
        all: () => doFetch(props.endpoint),
        get: id => doFetch(`${props.endpoint}/${id}`)
    };
};

const Store = {};

[
    {
        endpoint: 'events',
    }
].forEach(store => {
    Store[store.endpoint] = buildStore(store);
});

export default Store;
