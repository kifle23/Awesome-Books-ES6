import Book from './book.js';

export default class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.bookList = document.getElementById('bookList');
    this.displayBooks();
  }

  addNewBook = (title, author) => {
    const newBook = new Book(title, author);
    this.books.push(newBook);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  };

  removeBook = (index) => {
    this.books = this.books.filter((book, i) => i !== index);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  };

  displayBooks = () => {
    this.bookList.innerHTML = '';
    this.books.forEach((book, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
          <td>"${book.title}" by ${book.author}</td>
        `;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', () => {
        this.removeBook(index);
      });

      removeBtn.classList.add('removeBtn');
      tr.appendChild(removeBtn);
      this.bookList.appendChild(tr);
    });
  };
}
