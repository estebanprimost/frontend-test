import React, { Component } from 'react';
import Util from '../util';
import { Link } from 'react-router-dom';
import styles from '../styles/Event.css';

class Event extends Component {
    render() {
        const event = this.props.data;
        const minDate = Util.minDate(event.dates).format('MMM D, YYYY @ HH:MM');
        const shareText = `Iré al ${event.title} @ ${minDate} ${location}events/${event.id}`;

        return (
                <div 
                    className={`${styles.EventTile} column is-one-third`}
                    style={{backgroundImage: `url(${event.eventImage})`}}>
            
                    
                    <div className={`${styles.Event}`} >
                        <span className={`${styles.Date} tag is-primary`}>{minDate}</span>
                        <a
                            className='button is-success is-inverted is-pulled-right'
                            href={`https://twitter.com/intent/tweet?text=${shareText}`}>Share</a>
                        
                        <p className={`${styles.Title}`}>{event.title}</p>
                        
                        <Link className='button is-success' to={`/events/${event.id}`}>View</Link>
                    </div>
                    
                </div>
        );
    }
}

export default Event;