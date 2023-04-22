import { ContactElem } from '../ContactElem/ContactElem';

export const ContactsList = props => {
  const { contacts } = props;
  const { filter } = props;
  const { onRemove } = props;

  return (
    <ul>
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
    </ul>
  );
};
