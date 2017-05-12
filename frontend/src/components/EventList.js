import React, { Component } from 'react';
import Store from '../store';
import Event from './Event';
import Util from '../util';
import Header from './layout/Header';

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
            <div className="col grid">
                <div className='col-12'><Header title='Events' /></div>
                <div className='col-8 grid-2'>
                    {
                        this.state.events.map(e => 
                            <Event key={e.id} data={e} />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default EventList;