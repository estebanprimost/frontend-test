import React, { Component } from 'react';
import Store from '../store';
import Event from './Event';
import Util from '../util';
import FeaturedEvents from './FeaturedEvents';


class EventList extends Component {

    constructor() {
        super();

        this.state = {
            events: []
        };
    }

    componentDidMount() {
        Store.events.all().then(({ events }) => {
            const sorted = events.sort((e1, e2) => Util.minDate(e1.dates) > Util.minDate(e2.dates));

            this.setState({ events: sorted });
        });
    }
    
    render() {
        return (
            <div className='container is-fluid'>
                <div className='columns'>
                    <div className='column is-8'>
                        <div className='columns is-multiline'>
                            {
                                this.state.events.map(e => 
                                    <Event key={e.id} data={e} />
                                )
                            }
                        </div>
                    </div>
                    <div className='column is-4'>
                        <FeaturedEvents />
                    </div>
                </div>
            </div>
        );
    }
}

export default EventList;