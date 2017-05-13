import React, {Component} from 'react';
import Util from '../util';
import styles from '../styles/EventDates.css';


class EventDates extends Component {
    render() {
        const dates = this.props.dates || [];
        return (
            <div className={`content ${styles.EventDates}`}>
                <h3 className='subtitle'>Event dates</h3>
                    <ul>
                    {
                        dates.sort().map((d, i) => {
                            const date = Util.toMoment([d]).pop();

                            return (
                                <li key={i}>
                                    {date.format('DD MMM')} - {date.format('HH:mm')}
                                </li>
                            );
                        })
                    }
                    </ul>
            </div>
        );
    }
}

export default EventDates;
