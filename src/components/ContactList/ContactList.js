import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/Contacts/Contacts-seletors';
import { removeContact } from 'redux/Contacts/ContactListSlice';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  console.log(contacts);
  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteBtn={() => dispatch(removeContact(id))}
        />
      ))}
    </ul>
  );
};
