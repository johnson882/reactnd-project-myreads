import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf.js'
import './App.css'

class FrontPage extends Component {





  render(){

    const shelfs = [
    {
    id: 'currentlyReading',
    name: 'Currently Reading'
  },
  {
    id: 'wantToRead',
  name: 'Want to Read'
  },
  {
    id: 'read',
  name: 'Read'
  }
  ]
    return(


      <div>
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        </div>
        <div className="list-books-content">
        {/*console.log(this.props.books)*/}
        {

          shelfs.map((shelfs) =>
          (

          <BookShelf key={shelfs.id} name={shelfs.name} onUpdateShelf={this.props.onUpdateShelf} books={this.props.books.filter(
            (book) => (shelfs.id === book.shelf )
          )}/>
          ))}


          </div>

        <div className="open-search">
        <Link to='/search' />

        </div>
      </div>

    )}




  }

//export default FrontPage

//   <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a> link

export default FrontPage;
