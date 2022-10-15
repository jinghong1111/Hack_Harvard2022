import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'

 const styles = makeStyles({
    wrapper: {
        display: "flex",
        flexDirection: "column", 
        alignItems: "center", 
        padding: "0 5rem 0 5rem",
        fullWidth: true 
     }
}) 

// creating an interactive search bar component in the center of the page
function SearchBar() {
    const classes = styles()
    const [search, setSearch] = useState("")
    return (
        <div className={classes.wrapper}>
            <input value={search} onChange={e => setSearch(e.target.value)}/>
        </div>
    )
}

export default SearchBar
