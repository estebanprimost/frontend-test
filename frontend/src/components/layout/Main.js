import React, {Component} from 'react';
import GridLex from 'gridlex/src/gridlex-vars.scss';

class Main extends Component {
    render() {
        return (
            <div className={GridLex.grid}>
                <header className={GridLex.col12}>{this.props.title}</header>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main;
