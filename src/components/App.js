import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Logo from './Logo/Logo';
import Section from './section/Section';
import PhoneList from './phoneList/PhoneList';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import Alert from './Alert/Alert';

import defContacts from '../assets/defContacts.json';

class App extends Component {
  state = {
    contacts: null,
    filter: '',
    alert: false,
  };

  componentDidMount() {
    const localContacts = localStorage.getItem('contacts');
    if (localContacts === null) {
      localStorage.setItem('contacts', JSON.stringify(defContacts));
      this.setState({ contacts: defContacts });
    } else {
      this.setState({ contacts: JSON.parse(localContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    this.setState(prevState => {
      if (this.state.contacts.some(el => el.name === name)) {
        this.setState(() => this.setState({ alert: true }));
        setTimeout(() => this.setState({ alert: false }), 2000);
      } else {
        const newContact = { id: uuidv4(), name, number };
        return { contacts: [newContact, ...prevState.contacts] };
      }
    });
  };

  getSearchContacs = () => {
    const { filter, contacts } = this.state;
    const normalizeSearch = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeSearch),
    );
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  inputFilterChannge = e => {
    return this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { contacts, alert } = this.state;
    return (
      <>
        <Logo />
        <Section>
          <Alert in={alert} />
          <ContactForm onAddContact={this.addContact} />
        </Section>

        {contacts && (
          <Section title="Contacts">
            <Filter onSearch={this.inputFilterChannge} />

            <PhoneList
              contacts={this.getSearchContacs()}
              onRemoveContact={this.removeContact}
            />
          </Section>
        )}
      </>
    );
  }
}

export default App;
