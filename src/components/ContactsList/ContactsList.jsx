import { PropTypes } from 'prop-types';
import { ContactElem } from '../ContactElem/ContactElem';
import { ContactsListStyle } from './ContactsList.styled.jsx';

export const ContactsList = props => {
  const { contacts } = props;
  const { filter } = props;
  const { onRemove } = props;

  return (
    <ContactsListStyle>
      {contacts
        .filter(item =>
          item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        )
        .map(contact => {
          return (
            <ContactElem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onRemove={onRemove}
            />
          );
        })}
    </ContactsListStyle>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
