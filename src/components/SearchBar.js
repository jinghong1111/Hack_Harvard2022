import React, {useState} from 'react'

// creating a search bar component
function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.search(searchTerm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchTerm} onChange={handleChange} />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}
// exporting the search bar component
export default SearchBar