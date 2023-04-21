export const ContactElem = props => {
  console.log('what elem gets', props);
  return (
    <li>
      {props.name}
      {props.number}
    </li>
  );
};
