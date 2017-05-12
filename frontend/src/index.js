import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'gridlex/src/gridlex.less';
import { EventList, EventDetail } from './components';
import Header from './components/layout/Header';

ReactDOM.render(
    <Router>
        <div className='grid' >
            <Route path="/events/:id" component={EventDetail} />
            <Route exact path="/" component={EventList}/>
        </div>
    </Router>,
    document.getElementById('root')
);
