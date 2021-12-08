import Contact from '../models/contact.js';
import createPath from '../helpers/create-path.js';
import { handleError } from '../helpers/handle-error.js';

const getContacts = (req, res) => {
  const title = 'Contacts';
  Contact.find()
    .then((contacts) => res.render(createPath('contacts'), { contacts, title }))
    .catch((err) => {
      handleError(res, err);
    });
};

export { getContacts };
