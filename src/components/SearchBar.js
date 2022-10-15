import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'

 const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#CC9966",
        ['@media (max-width:2000x)']: { 
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
    const classes = styles() ;
    return (
        <div className= {classes.wrapper}>
            <h1> Product Search </h1>
            {/*creating a form and make the search bar customizable  */}
            <form onSubmit={handleSubmit}>
                {/* Make the search bar bigger  */}
                <input type="text" value={searchTerm} onChange={handleChange} placeholder= "Anything comes to your mind, we got it (maybe)" fullWidth />
                <input type="submit" value="Search" fullWidth/>
            </form>
        </div>
    )
}
// exporting the search bar component
export default SearchBar