import { Container } from './Container/Container';

import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/Contacts/ContactListSlice';
import { getItems } from 'redux/Contacts/Contacts-seletors';
import { Filter } from './Filter/Filter';

export const App = () => {
  const contacts = useSelector(getItems);

  const dispatch = useDispatch();
  const formSubmitHandler = data => {
    if (contacts.find(contact => contact.name === data.name)) {
      return alert(`Contact of ${data.name} is already exist`);
    }
    dispatch(addContact(data));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Search contact</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};
