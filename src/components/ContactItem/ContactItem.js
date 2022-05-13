import React from 'react';
import { useDeleteContactMutation } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

import s from './ContactItem.module.css';

function ContactItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <div className={s.item}>
      <h3>{name}</h3>
      <p>{number}</p>
      <Stack direction="row" spacing={2}>
        <Button
          onClick={() => {
            deleteContact(id);
            toast.info('Your contact has been deleted');
          }}
          disabled={isDeleting}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </Stack>
      {/* <button
        onClick={() => {
          deleteContact(id);
          toast.info('Your contact has been deleted');
        }}
        disabled={isDeleting}
      >
        {isDeleting ? 'Deleting' : 'Delete'}
      </button> */}
    </div>
  );
}
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
