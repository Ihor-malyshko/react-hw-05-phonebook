import React, { Component } from 'react';
import s from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <div className={s.field}>
          <input
            type="text"
            value={name}
            onChange={this.handleInputChange}
            className={s.input}
            name="name"
            id="name"
            placeholder=" "
          />
          <label htmlFor="name" className={s.label}>
            Name
          </label>
        </div>

        <div className={s.field}>
          <input
            type="tel"
            value={number}
            onChange={this.handleInputChange}
            className={s.input}
            name="number"
            id="tel"
            placeholder=" "
          />
          <label htmlFor="tel" className={s.label}>
            Phone number
          </label>
        </div>
        <button
          type="submit"
          className={s.btn}
          disabled={name === '' ? true : false}
        >
          Add
        </button>
      </form>
    );
  }
}
