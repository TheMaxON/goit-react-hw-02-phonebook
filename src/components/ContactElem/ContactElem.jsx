import { PropTypes } from 'prop-types';
import { ContactElemStyle } from './ContactElem.styled.jsx';
import { ContactName } from './ContactElem.styled.jsx';
import { ContactNumber } from './ContactElem.styled.jsx';
import { DeleteBtn } from './ContactElem.styled.jsx';

export const ContactElem = props => {
  const { id, name, number, onRemove } = props;
  return (
    <ContactElemStyle>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DeleteBtn type="button" onClick={() => onRemove(id)}>
        Remove
      </DeleteBtn>
    </ContactElemStyle>
  );
};

ContactElem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
