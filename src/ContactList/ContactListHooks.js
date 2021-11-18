

import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { deleteContact,fetchContacts } from "../redux/contacts/contacts-operations";

import s from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact, fetchContactsAll, isLoading }) => {
 useEffect(()=>{fetchContactsAll()},[])
  return (
    <div>
      <ol className={s.contacts__list}>
        {contacts.map(({ name, number, id }) => (
          <li key={id} className="ContactList_item">
            {name} {number}
            <button
              className={s.contacts__button}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          
          </li>
        ))}
      </ol>
    </div>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
const mapStateToProps = ({
  
  contacts: { phonebookContacts, phonebookFilter },
}) => ({
  contacts: getVisibleContacts(phonebookContacts, phonebookFilter),
 
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(deleteContact(id)),
  fetchContactsAll:()=>dispatch(fetchContacts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
