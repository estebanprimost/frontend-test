import React, {Component} from 'react';
import Util from '../util';

class EventDates extends Component {
    render() {
        const dates = this.props.dates || [];
        return (
            <div className='grid'>
                {
                    dates.sort().map(d => {
                        const date = Util.toMoment([d]).pop();

                        return (
                            <div className='col-12 grid'>
                                <div className='col-6'>{date.format('D MMM')}</div>
                                <div className='col-6'>{date.format('HH:mm')}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default EventDates;
