import React, { Component } from 'react';
import Store from '../store';
import moment from 'moment';
import Ajv from 'ajv';

const eventSchema = {
    properties: {
        title: { type: 'string' },
        eventImage: { type: 'string', format: 'url' },
        description: { type: 'string' },
        dates: { type: 'array', items: { type: 'string' }, minItems: 1 },
        location: { type: 'string' }
    }
};

class EventCreate extends Component {

    constructor() {
        super();

        this.state = {
            dates: [],
            dateFormatError: false,
            dateCountError: false,
            formError: false,
            postResult: false
        };

        this.handleAddDateClick = this.handleAddDateClick.bind(this);
        this.handleRemoveDateClick = this.handleRemoveDateClick.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.clean = this.clean.bind(this);
    }

    handleAddDateClick(e) {
        const dateValue = this.inputDate.value;
        const timeValue = this.inputTime.value;
        const date = moment(`${dateValue} ${timeValue}`);
        
        this.setState({ dateFormatError: !date.isValid() });

        if (date.isValid()) {
            this.setState({
                dates: this.state.dates.concat([date.format('MM/DD/YYYY HH:mm')])
            });
        }

        this.inputDate.value = '';
        this.inputTime.value = '';
    }

    handleRemoveDateClick(index) {
        const dates = this.state.dates;
        dates.splice(index, 1);
        this.setState({ dates });
    }

    handleFormSubmit(e) {
        const event = {
            title: this.inputTitle.value,
            eventImage: this.inputImage.value,
            description: this.inputDescription.value,
            dates: this.state.dates,
            location: this.inputLocation.value
        };

        const ajv = new Ajv();
        if (!ajv.validate(eventSchema, event)) {
            this.setState({ formError: true });
            return false;
        };

        Store.events
            .post({ event })
            .then(() => {
                this.setState({ postResult: {
                    text: 'Event created!',
                    error: false
                }});
            })
            .catch(err => {
                this.setState({ postResult: {
                    text: 'There was a problem saving your event. Try again later.',
                    error: true
                }});
            });

        this.clean();

        e.preventDefault();
    }

    clean() {
        this.setState({
            dateCountError: false,
            dateFormatError: false,
            formError: false,
            postResult: false,
            dates: []
        });

        this.inputTitle.value = '';
        this.inputImage.value = '';
        this.inputDescription.value = '';
        this.inputLocation.value = '';
    }

    render() {
        return (
                <div className='container is-fluid'>

                    {
                        this.state.formError ?
                            <div className='notification is-danger'>
                                Please, check and complete all fields.
                            </div>
                        : ''
                    }

                    {
                        this.state.postResult ?
                            <div className={`notification is-${this.state.postResult.error ? 'danger' : 'success'}`}>
                                {this.state.postResult.text}
                            </div>
                        : ''
                    }

                    <div className='field'>
                        <p className='control'>
                            <label>Title</label>
                            <input
                                type='text'
                                ref={(input) => { this.inputTitle = input; }} 
                                required
                                className='input'
                                placeholder='Title' />
                        </p>
                    </div>
                    
                    <div className='field'>
                        <p className='control'>
                            <label>Description</label>
                            <textarea 
                                ref={(input) => { this.inputDescription = input; }}
                                required
                                className='textarea'
                                placeholder='Description' ></textarea>
                        </p>
                    </div>

                    <div className='field'>
                        <p className='control'>
                            <label>Location</label>
                            <input
                                ref={(input) => { this.inputLocation = input; }}                             
                                required
                                className='input'
                                type='text'
                                placeholder='Location' />
                        </p>
                    </div>
                        
                    <div className='field'>
                        <p className='control'>
                            <label>Image URL</label>
                            <input
                                ref={(input) => { this.inputImage = input; }}                             
                                required
                                className='input'
                                type='url'
                                placeholder='Image URL' />
                        </p>
                    </div>

                    <div className='field'>
                        <label>Dates</label>

                        <div className='columns is-multiline'>
                            <div className='column is-8'>
                            {
                                this.state.dates.map((d, i) => (
                                    <div key={i}>
                                        {d}&nbsp;<button
                                            onClick={() => this.handleRemoveDateClick(i)}
                                            className='button is-small is-danger'>Remove</button>
                                    </div>
                                ))
                            }
                            </div>
                        </div>

                        <div className='columns is-multiline'>
                            <div className='column is-3'>
                                <input
                                    className='input'
                                    type='date'
                                    placeholder='Event date'
                                    ref={(input) => { this.inputDate = input; }}
                                />
                            </div>
                            <div className='column is-2'>
                                <input
                                    className='input'
                                    type='time'
                                    placeholder='Event time'
                                    ref={(input) => { this.inputTime = input; }}
                                />
                            </div>
                            <div className='column is-3'>
                                <button
                                    type='button'
                                    onClick={this.handleAddDateClick}
                                    className='button is-primary'> + Add date</button>
                            </div>
                        </div>
                        <div className='columns'>
                            <div className='column is-7'>
                                {
                                    this.state.dateFormatError ? <p className='help is-danger'>Date/Time invalid.</p> : ''
                                }
                                {
                                    this.state.dateCountError ? <p className='help is-danger'>Insert at least one date to the event.</p> : ''
                                }
                            </div>
                        </div>
                    </div>

                    <div className='field'>
                        <button className='button is-success' type='submit' onClick={this.handleFormSubmit}>Save!</button>
                    </div>
                </div>
        );
    }
}

export default EventCreate;