import { createAction } from "@reduxjs/toolkit";

// const addContact = createAction("contacts/add", (name, number) => ({
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// }));

export const fetchContactRequest =
  createAction("contacts/fetchContactRequest")
export const fetchContactSuccess =
  createAction("contacts/fetchContactSuccess")
export const fetchContactError =
  createAction("contacts/fetchContactError")

export const addContactRequest =
  createAction("contacts/addContactRequest")
export const addContactSuccess =
  createAction("contacts/addContactSuccess")
export const addContactError =
  createAction("contacts/addContactError")

export const deleteContactRequest =
  createAction("contacts/deleteContactRequest")
export const deleteContactSuccess =
  createAction("contacts/deleteContactSuccess")
export const deleteContactError =
  createAction("contacts/deleteContactError")


// export const deleteContact = createAction("phonebook/delete");
export const changeFilter = createAction("phonebook/changeFilter");

// export default { addContact, deleteContact, changeFilter ,addContactRequest,addContactSuccess,addContactError};
