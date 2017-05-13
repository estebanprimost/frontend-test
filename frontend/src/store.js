import 'whatwg-fetch';

const url = 'http://localhost:3000';

const doFetch = (endpoint, { method, headers, body } = {
    method: 'GET',
    headers: {},
    body: {}
}) => fetch(
    `${url}/${endpoint}`, {
        method,
        headers,
        body
    }
).then(r => r.json());

const buildStore = props => {
    return {
        all: (path = '') => doFetch(`${props.endpoint}/${path}`),
        
        get: id => doFetch(`${props.endpoint}/${id}`),
        
        post: data => doFetch(props.endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
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
