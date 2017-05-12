import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EventList from './components/EventList';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <Router>
              <div>
                <Route exact path="/" component={EventList} />
              </div>
            </Router>
        );
    }
}

export default App;
