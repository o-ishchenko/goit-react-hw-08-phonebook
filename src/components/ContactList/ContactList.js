import React from 'react';
import { useFetchContactsQuery } from '../../redux/contactsSlice';
import Loader from 'components/Loader';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

function ContactList({ filter }) {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (!contacts) {
      return;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();
  return (
    <>
      {isFetching && <Loader />}
      {contacts && (
        <ul className={s.list}>
          {visibleContacts.map(({ id, name, number }) => (
            <li key={id}>
              <ContactItem id={id} name={name} number={number} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

ContactList.propTypes = {
  filter: PropTypes.string,
};

export default ContactList;
