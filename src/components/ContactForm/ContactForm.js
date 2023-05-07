import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'components/redux/phonebookSlice';
import css from './ContactForm.module.css';

import {
  useAddContactMutation,
  useGetContactQuery,
} from 'components/redux/contactSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);

  const { data: contacts } = useGetContactQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleSubmit = async evt => {
    evt.preventDefault();

    const isExistContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExistContact) {
      alert(`${name} is already in contacts.`);
      return;
    } else {
      const isCreated = await addContact({
        name: name,
        phone: number,
      });
      if (isCreated) {
        setName('');
        setNumber('');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label> Name </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={evt => setName(evt.target.value)}
      />
      <label> Phone </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={evt => setNumber(evt.target.value)}
      />
      <button disabled={isLoading} type="submit">
        Add Contact
      </button>
    </form>
  );
};
