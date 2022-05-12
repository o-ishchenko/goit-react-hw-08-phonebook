import React from 'react';
import { useDeleteContactMutation } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import s from './ContactItem.module.css';

function ContactItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <div className={s.item}>
      <h3>{name}</h3>
      <p>{number}</p>
      <button
        onClick={() => {
          deleteContact(id);
          toast.info('Your contact has been deleted');
        }}
        disabled={isDeleting}
      >
        {isDeleting ? 'Deleting' : 'Delete'}
      </button>
    </div>
  );
}
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
