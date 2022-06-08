import Book from './components/Book';
import './App.css';

import {data} from './components/books';

const App = function(){
  return (
    <section className="bookstore">
      <div className="bookstore_title">
        <h1>My Book Store</h1>
      </div>
      <div className="books">
        {data.map((book) =>
        <Book key = {book.id} book={book} />)}
      </div>
    </section>
  );
}


export default App;
