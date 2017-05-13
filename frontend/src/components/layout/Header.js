import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
                <div className='container is-fluid'>
                    <div className='heading'>
                        <div className='columns is-multiline'>
                            <div className='column is-half'>
                                <h1 className='title'>
                                    {this.props.title}
                                </h1>
                            </div>
                            <div className='column is-half'>
                                {this.props.children}
                            </div>
                            <div className='column is-12'>
                            {
                                this.props.back ? (
                                    <div className='block'>
                                        <Link
                                            className='button is-link'
                                            to={(this.props.back || {}).link}
                                        >&lt;&lt; {(this.props.back || {}).label || 'Back'}</Link>
                                    </div>
                                ) : ''
                            }
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
        );
    }
}

export default Header;
