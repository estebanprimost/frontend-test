import moment from 'moment';

const Util = {
    toMoment: dates => dates.map(d => moment(d, 'M/D/YYYY HH:mm')),
    minDate: dates => moment.min(Util.toMoment(dates))
};

export default Util;
