import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/phonebookSlice';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <li>
      {contact.name}: {contact.number}{' '}
      <button onClick={handleDeleteContact}>Delete</button>
    </li>
  );
};
