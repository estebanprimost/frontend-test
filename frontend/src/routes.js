import {
    EventDetail, EventList, EventCreate
} from './components';
import React from 'react';
import { Link } from 'react-router-dom';

export default [
    {
        exact: true,
        main: () => <EventList />,
        path: '/',
        title: 'Events',
        headerChild: <Link className='button is-primary is-pulled-right' to='/events/create'>Create event</Link>
    },
    {
        exact: true,
        main: () => <EventCreate />,
        path: '/events/create',
        title: 'Create event',
        back: {
            link: '/',
            label: 'Events'
        }
    },
    {
        exact: true,
        main: (route) => {
            return (
                <EventDetail eventId={route.match.params.id} />
            );
        },
        path: '/events/:id(\\d+)',
        title: 'Event detail',
        back: {
            link: '/',
            label: 'Events'
        }
    }
];