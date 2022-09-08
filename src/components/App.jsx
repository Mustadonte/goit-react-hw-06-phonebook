import { Container } from './Container/Container';

import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Search contact</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};
