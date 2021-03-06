import React,{Component} from 'react';
//import Home from './Home.js'
import './App.css'

class Book extends Component{
// passes updated shelf name and book to the updatedShelf on app.js page
constructor(props){
        super(props);
        this.state = { book: this.props.book };
    }
  handleChange( shelfName) {
  this.props.onUpdateShelf(shelfName, this.props.book)
  this.props.book.shelf = shelfName;
  this.setState({book: this.props.book})

    }

render(){
return(
<div>
<li>
<div className="book">
<div className="book-top">


           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.image})` }}></div>
           <div className="book-shelf-changer">
             <select value={this.state.book.shelf || 'none'} onChange={change => this.handleChange( change.target.value)}>
               <option value="move" disabled>Move to...</option>
               <option value="currentlyReading">Currently Reading</option>
               <option value="wantToRead">Want to Read</option>
               <option value="read">Read</option>
               <option value="none">None</option>
             </select>
           </div>
         </div>
         <div className="book-title">{this.props.title}</div>
       <div className="book-authors">{this.props.authors}</div>
</div>
</li>
</div>
)
}

}
export default Book
