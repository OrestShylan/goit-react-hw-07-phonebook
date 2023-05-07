// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'components/redux/phonebookSlice';
// import { ContactItem } from 'components/ContactItem/ContactItem';
// import { selectContacts, selectFilter } from 'components/redux/selectors';

// export const ContactList = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectFilter);
//   const filteredContacts = contacts.filter(
//     contact =>
//       contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
//   const handleDeleteContact = id => {
//     dispatch(deleteContact(id));
//   };
//   return (
//     <ul>
//       {filteredContacts.map(contact => (
//         <ContactItem
//           key={contact.id}
//           contact={contact}
//           handleDeleteContact={handleDeleteContact}
//         />
//       ))}
//     </ul>
//   );
// };

import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectFilter } from 'components/redux/selectors';

import { useGetContactQuery } from 'components/redux/contactSlice';

export const ContactList = () => {
  const { data: contacts } = useGetContactQuery();

  const filter = useSelector(selectFilter);

  const filteredContacts = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    filteredContacts?.length > 0 && (
      <ul>
        {filteredContacts.map(({ name, phone: number, id }) => {
          return (
            <ContactItem
              key={id}
              name={name}
              number={number}
              id={id}
            ></ContactItem>
          );
        })}
      </ul>
    )
  );
};
