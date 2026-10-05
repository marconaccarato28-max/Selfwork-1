export function addContacts(student, contacts) {
return {
...student,
contatti: contacts
};
}

export function getContacts({ contatti }) {
return contatti.join(", ");
}