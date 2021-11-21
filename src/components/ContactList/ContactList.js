import PropTypes from "prop-types";
import "./ContactList.css";
import { connect } from "react-redux";
import { removeContact } from "../redux/contacts/contacts-operations";
import { getVisiblesContacts } from "../redux/contacts/contacts-selectors";
import Svg from "../../images/Svg";

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <span className='name'> {name}:</span>
            <span className='tel'> {number}</span>
            <button
              type='button'
              className='contact-btn'
              onClick={() => removeContact(id)}>
              <div>
                <Svg name='delete' />
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  contacts: getVisiblesContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeContact: (id) => dispatch(removeContact(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  removeContact: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
