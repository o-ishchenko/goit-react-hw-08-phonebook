import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from '../../components/Form';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import styles from './ContactsPage.module.css';

function ContactsPage() {
  const [filter, setFilter] = useState('');

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  return (
    <div>
      <h2 className={styles.title}>Phonebook</h2>
      <Form />
      <h2 className={styles.title}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList filter={filter} />
      <ToastContainer autoClose={1500} position="top-center" />
    </div>
  );
}

export default ContactsPage;
