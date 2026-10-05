import { student } from "./student.js";
import { addContacts, getContacts } from "./contacts.js";

const updatedStudent = addContacts(
student,
["Luca", "Mario", "Anna"]
);

console.log(updatedStudent);
console.log(getContacts(updatedStudent));