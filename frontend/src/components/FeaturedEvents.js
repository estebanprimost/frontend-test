import React, { Component } from 'react';
import Store from '../store';
import Util from '../util';
import styles from '../styles/FeaturedEvents.css';
import { Link } from 'react-router-dom';

class FeaturedEvents extends Component {

    constructor() {
        super();

        this.state = {
            events: []
        };
    }

    componentDidMount() {
        Store.events.get('featured').then(({ events }) => {
            const sorted = events.sort((e1, e2) => Util.minDate(e1.dates) > Util.minDate(e2.dates));

            this.setState({ events: sorted });
        });
    }
    
    render() {

        return (
            <div className='columns is-multiline'>
                <h3 className='column is-12 title'>Featured events</h3>
                <div className='column is-12'>
                {
                    this.state.events.map(e => {

                        const minDate = Util.minDate(e.dates).format('MMM D, YYYY @ HH:MM');
                        
                        return (
                            <article key={e.id} className='media'>
                                <figure className='media-left'>
                                    <p className={`image is-64x64 ${styles.Image}`}>
                                        <img src={e.eventImage} role='presentation' />
                                    </p>
                                </figure>
                                <div className='media-content'>
                                    <div className='content'>
                                        <Link to={`/events/${e.id}`}><strong>{e.title}</strong></Link>
                                        <br />
                                        <small className='tag is-pulled-right'>{minDate}</small>
                                    </div>
                                </div>
                            </article>
                        );

                        /*<div key={e.id} className='column is-12 columns'>
                            <div className='col-2'>IMG</div>
                            <div className='col-8 grid'>
                                <div className='col-12'>{e.title}</div>
                                <div className='col-12'>{e.description}</div>
                            </div>
                            <div className='col-12'>{e.location}</div>
                        </div>*/
                    })
                }
                </div>
            </div>
        );
    }
}

export default FeaturedEvents;