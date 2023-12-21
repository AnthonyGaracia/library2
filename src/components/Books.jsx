import LibraryForm from './LibraryForm'
import { Link } from 'react-router-dom'


const Books = ({books}) => {
   

  return(
        <div>
            <h1>Books</h1>
            <div>
            <p>Search Book</p>
            <LibraryForm books = {books}/>
         </div>
         
             <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}>
                                <Link to={`/books/${book.id}`}>
                                {book.title}
                                </Link>
                              <div>
                                {
                                    book.available === true ? "available":"unavailable"
                                }
                              </div>
                                
                                </li>
                        )
                    })
                }
            </ul> 
      
   
        
        </div>
    )
}

export default Books