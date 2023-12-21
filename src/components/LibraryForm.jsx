import { useState } from "react"
import { Link } from "react-router-dom"

const LibraryForm = ({books}) => {
    const [searchTitle, setSearchTitle] = useState('')
    const filterTitle = books.filter((book) => {
        return book.title.toLowerCase().indexOf(searchTitle.toLowerCase())!== -1
    })
        
        
    return(
    
        <div>
        
            <label>
                <input type="text" value={searchTitle} onChange={(event) => {setSearchTitle(event.target.value)}}></input>
            </label>
            {
                searchTitle.length > 0?
                <div>
                    <h3>(Viewing {filterTitle.length} books of {books.length})</h3>
                    <ul>
                        {filterTitle.map((book) =>
                        {
                            return <li key={book.id}> <Link to={`/books/${book.id}`}>{book.title}</Link></li>
                        }
                        )}
                    </ul>

                </div>
                :null
            }
        </div>
    )

}

export default LibraryForm