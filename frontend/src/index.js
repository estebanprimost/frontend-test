import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'gridlex/src/gridlex.less';
// import { EventList, EventDetail } from './components';
import Header from './components/layout/Header';
import routes from './routes';

ReactDOM.render(
    <Router>
        <div className='grid' >
            <Header />
            {
                routes.map((route, index) => (
         
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                ))
            }
        </div>
    </Router>,
    document.getElementById('root')
);
