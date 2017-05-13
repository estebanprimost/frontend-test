import React, {Component} from 'react';
import Store from '../store';
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
            <div className='container is-fluid'>
                <div className="columns is-multiline">
                    <div className="column is-8">
                        <h1 className='title'>{event.location}</h1>
                        <p>{event.description}</p>
                        <div className='is-clearfix'>
                        {
                            event.dates ? 
                                <EventDates dates={event.dates} /> :
                                ''
                        }
                        </div>
                    </div>
                    <div className="column is-4 has-text-centered">
                        <img src={event.eventImage} role='presentation' />
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default EventDetail;