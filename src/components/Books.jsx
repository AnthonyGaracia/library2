import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'


const Books = ({books}) => {
    const params = useParams()
    const id = params.id*1
console.log(books)
  return(
        <div>
            <h1>Books</h1>
            <h3>We should see our books here!</h3>
             <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}>
                                <Link to={`/books/${book.id}`}>
                                {book.title}
                                </Link>
                                
                                </li>
                        )
                    })
                }
            </ul> 
      
   
        
        </div>
    )
}

export default Books