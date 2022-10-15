import React, {useState} from 'react'
import CustomBtn from './CustomBtn'
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
})

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
    const classes = styles();
    return (
        <div className= {classes.wrapper}>
            {/*creating a form and make the search bar customizable  */}
            <form onSubmit={handleSubmit}>
                {/* Make the search bar bigger  */}
                <input type="text" value={searchTerm} onChange={handleChange} placeholder= "Anything comes to your mind, we got it (maybe)" />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}
// exporting the search bar component
export default SearchBar