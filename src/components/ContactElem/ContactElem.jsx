export const ContactElem = props => {
  const { id, name, number, onRemove } = props;
  return (
    <li>
      {name}
      {number}
      <button type="button" onClick={() => onRemove(id)}>
        Remove
      </button>
    </li>
  );
};
