import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'

 const styles = makeStyles({
    wrapper: {
        display: "flex",
        alignItems: "center", 
     }, 
     bigSpace: {
        marginTop: "2rem"
        
      },
}) 

// creating a search bar component in the center of the page

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
        <div className= {`${classes.wrapper} ${classes.bigSpace}`}>
            <h1> Product Search </h1>
            {/*creating a form and make the search bar customizable  */}
            <form onSubmit={handleSubmit} >
                {/* Make the search bar bigger  */}
                <input type="text" value={searchTerm} onChange={handleChange} style={{height: "100", width: "100",  fill: "#1DA1F2"}} 
                placeholder= "Anything comes to your mind, we got it (maybe)"  />
                <input type="submit" value="Search" style={{height: "100", width: "100",  fill: "#1DA1F2"} } />
            </form>
        </div>
    )
}
// exporting the search bar component
export default SearchBar