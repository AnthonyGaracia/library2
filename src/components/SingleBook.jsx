
import { useParams,Link } from "react-router-dom"

const SingleBook = ({books}) => {
    const params = useParams()
    const id = params.id*1
    const book = books.find((book) => {
        return book.id === id

    })

    if(!book){
        return null
    }
    console.log(params)
    return(
        <div>
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <h4>{book.description}</h4>
            <Link to='/books'>
            Back to Catalog
            </Link>
        </div>
    )
}
export default SingleBook