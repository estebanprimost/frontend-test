import React, { Component } from 'react';
import Util from '../util';
import { Link } from 'react-router-dom';

class Event extends Component {
    render() {
        const event = this.props.data;
        const minDate = Util.minDate(event.dates);

        return (
            <div className='col grid' style={{backgroundImage: `url(${event.eventImage})`}}>
                <span>{minDate.format('MMM D, YYYY @ HH:MM')}</span>
                <h2 className='col-12'>{event.title}</h2>
                <Link to={`/events/${event.id}`}>View</Link>
            </div>
        );
    }
}

export default Event;