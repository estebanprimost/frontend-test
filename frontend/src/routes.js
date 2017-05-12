import {
    EventDetail, EventList
} from './components';
import React from 'react';

export default [
    {
        path: '/',
        exact: true,
        main: () => <EventList />
    },
    {
        path: '/events/:id',
        main: (route) => <EventDetail eventId={route.match.params.id} />
    }
];