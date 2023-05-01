import nav from './modules/navigation.js';
import Book from './modules/BookCollection.js';
import { btnAdd, txtTitle, txtAuthor } from './modules/formElements.js';
import { DateTime } from './modules/luxon.js';

nav();

const displayDate = () => {
  const now = DateTime.now();
  const date = document.getElementById('date-time');
  date.textContent = now.toLocaleString(DateTime.DATETIME_MED);
};
displayDate();

const bookCollection = new Book();

const addBook = (e) => {
  e.preventDefault();

  if (txtTitle.value === '' || txtAuthor.value === '') {
    return;
  }

  bookCollection.addNewBook(txtTitle.value, txtAuthor.value);

  txtTitle.value = '';
  txtAuthor.value = '';
};

btnAdd.addEventListener('click', addBook);
