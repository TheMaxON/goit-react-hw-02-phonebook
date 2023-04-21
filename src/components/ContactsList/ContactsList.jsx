import { nanoid } from 'nanoid';
import { ContactElem } from '../ContactElem/ContactElem';

export const ContactsList = props => {
  console.log('то, что получает list', props);

  return (
    <ul>
      {props.contacts.map(contact => (
        <ContactElem
          key={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};
