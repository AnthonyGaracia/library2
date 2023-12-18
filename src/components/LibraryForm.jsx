import { useState } from "react"

const LibraryForm = ({create}) => {
    const [title, setTitle] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        const newSearch = {
            title
        }
        create(newSearch)
        }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    type="text"
                    value={title}
                    onChange={(event) => {setTitle(event.target.value)}}
                />
            </label>
            <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default LibraryForm