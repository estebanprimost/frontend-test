import React, {Component} from 'react';
import Header from './layout/Header';
import Store from '../store';
import { Link } from 'react-router-dom';
import EventDates from './EventDates';

class EventDetail extends Component {

    constructor() {
        super();

        this.state = {
            event: {}
        };
    }


    componentDidMount() {
        Store.events.get(this.props.eventId).then(({ event }) => this.setState({ event }));
    }

    render() {
        const event = this.state.event;
        return (
            <div className='col'>
                <Link to='/'>&lt;- Events</Link>

                <div className="col grid-2">
                    <div className="col-8">
                        <Header title={event.title}></Header>
                        <h4>{event.location}</h4>
                        <p>{event.description}</p>
                    </div>
                    <div className="col-4">
                        <img src={event.eventImage} role='presentation' />
                    </div>
                    <div className="col-4">
                        {
                            event.dates ? 
                                <EventDates dates={event.dates} /> :
                                ''
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default EventDetail;