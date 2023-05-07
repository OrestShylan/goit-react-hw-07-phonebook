// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'components/redux/phonebookSlice';

// export const ContactItem = ({ contact }) => {
//   const dispatch = useDispatch();
//   const handleDeleteContact = () => {
//     dispatch(deleteContact(contact.id));
//   };
//   return (
//     <li>
//       {contact.name}: {contact.number}{' '}
//       <button onClick={handleDeleteContact}>Delete</button>
//     </li>
//   );
// };

import { useDeleteContactMutation } from 'components/redux/contactSlice';

export const ContactItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDeleteContact = async () => {
    const del = await deleteContact(id);

    return del;
  };

  return (
    <li>
      {name}: {number}
      <button disabled={isLoading} onClick={handleDeleteContact}>
        Dell contact
      </button>
    </li>
  );
};
