// comparison page 
import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'

 const styles = makeStyles({
    wrapper: {
        display: "flex",
        flexDirection: "column", 
        alignItems: "center", 
        padding: "0 5rem 0 5rem"
     }, 
     bigSpace: {
        marginTop: "-4rem", 
        font : "bold", 
        size : "5px", 
     }, 
     textbox: {
        width: "240%",
        height: "70%",
        padding: "10%",
        margin: "8px 0",
        boxSizing: "border-box",
        border: "5px solid #ccc",
        borderRadius: "20%",
        backgroundColor: "#f8f8f8",
        resize: "auto",
        fontSize: "large",
        left: '-60%',
        top: '-30%',
        zIndex: '2',
        position: 'relative',
        '&:focus': {
            boxShadow: '1 2 2 1',
            outline: 'none',
            border: '3px solid #ccc',
            backgroundColor: '#f8f8f8',
            transition: 'all 0.2s ease-in-out',
                

        },
    },
    submit: {
        fontSize: "large",
        // roboto font 
        fontFamily: "Roboto",
        // font weight
        fontWeight: "bold",
        //location from the search bar 
        position: 'relative',
        // font color
        },
    }) 


// creating a search bar component in the center of the page

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('')
    const [user, setUser] = useState('')

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
        
    }

    const handleSubmit = (event) => {
        console.log(`The name you entered was: ${searchTerm}`)
        event.preventDefault()
        // props.search(searchTerm)
        fetch("http://localhost:5000/search", {
            method: "POST",
            mode: "cors",
            headers:{"content_type":"application/json"},
            body: JSON.stringify({
                user: 'null for now',
                product: searchTerm
})}).then(response => (response.json()).then(response => console.log(response)))
    }
    const classes = styles() ;
    return (
        <div className= {`${classes.wrapper} ${classes.bigSpace}`}>
            {/*creating a form and make the search bar customizable  */}
            <form onSubmit={handleSubmit} >
                <input className={classes.textbox} type="text" placeholder="Search " name="product_name" value={searchTerm} onChange={handleChange} />
                <input className= {classes.submit} type="submit" value="Search" />
            </form>
        </div>
    )
}
// exporting the search bar component
export default SearchBar