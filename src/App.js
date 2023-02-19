import React from 'react';
import Header from './components/Header';
import Listbooks from './components/Listbooks';
import AddBook from './components/AddBook';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
  books: [
    {
      id: 1,
      author: "Эдгар По",
      namebook: "Ворон",
      genre: "триллер",
      yearpublic: 2023,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      rating: 0,
      isLike: true 
    },
    {
      id: 2,
      author: "Морис Дрюон",
      namebook: "Железный король",
      genre: "история",
      yearpublic: 2020,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      rating: 0,
      isLike: true 
    },
    {
      id: 3,
      author: "Александр Блок",
      namebook: "Двенадцать",
      genre: "поэзия",
      yearpublic: 2000,
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 0, 
      isLike: false 
    },
    {
      id: 4,
      author: "Жюль Верн",
      namebook: "Таинственный остров",
      genre: "приключения",
      yearpublic: 2005,
      text: "Porta non pulvinar neque laoreet suspendisse interdum consectetur. Vel turpis nunc eget lorem dolor sed viverra ipsum.",
      rating: 0,
      isLike: true 
    },
    {
      id: 5,
      author: "Михаил Лермонтов",
      namebook: "Маскарад",
      genre: "драма",
      yearpublic: 2015,
      text: "A lacus vestibulum sed arcu non odio euismod lacinia at. Suspendisse in est ante in nibh mauris. ",
      rating: 0,
      isLike: false 
    },
    {
      id: 6,
      author: "Омар Хайям",
      namebook: "Рубаи",
      genre: "поэзия",
      yearpublic: 2007,
      text: "Neque viverra justo nec ultrices dui sapien eget. Sed arcu non odio euismod. ",
      rating: 0,
      isLike: true 
    },
    {
      id: 7,
      author: "Стивен Кинг",
      namebook: "Оно",
      genre: "триллер",
      yearpublic: 2015,
      text: "Sapien faucibus et molestie ac. Nisl pretium fusce id velit.  ",
      rating: 0,
      isLike: true 
    }
  ]
    }
    this.addBook = this.addBook.bind(this)
    this.deleteBook = this.deleteBook.bind(this)
    this.editBook = this.editBook.bind(this)
  }
  render() {
    return (<div>
      
      <Header title="Библиотека" />
      <main>
        <Listbooks books={this.state.books} onEdit={this.editBook} onDelete={this.deleteBook}/>
      </main>
      <aside>
        <AddBook onAdd={this.addBook}/>
      </aside>

  </div>)
    }

    deleteBook(id) {
      this.setState({
        books: this.state.books.filter((el) => el.id !== id)
      })
    }

    editBook(bookedit) {
      let allBooks = this.state.books
      allBooks[bookedit.id - 1] = bookedit

      this.setState({books: []}, () => {
        this.setState({books: [...allBooks]})
      })
    }

    addBook(booknew) {
      const id = this.state.books.length + 1
      this.setState({books: [...this.state.books, {id, ...booknew}]})
  }
  }

  export default App