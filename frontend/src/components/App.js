import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Header from './layout/Header';
import routes from '../routes';

class App extends Component {
    render() {
        return (
            <div className='container is-fluid'>
                {
                    routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            render={routeProps => {
                                return (
                                    <div className='section'>
                                        <Header
                                            title={route.title}
                                            back={route.back}
                                        >{route.headerChild}</Header>
                                        
                                        {React.createElement(route.main, routeProps)}
                                    </div>
                                );
                            }}
                        />
                    ))
                }
            </div>
        );
    }
}

export default App;