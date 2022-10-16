import { render } from "@testing-library/react";
import SchoolIcon from '@mui/icons-material/School';
import ForestIcon from '@mui/icons-material/Forest';
import CasinoIcon from '@mui/icons-material/Casino';
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import SearchBar from './SearchBar'
import Grid from './Grid'
import React from 'react'
function Home(props) {
    const styles = makeStyles({
        wrapper: {
          width: "30%",
          margin: "auto",
          textAlign: "center"
        },
        bigSpace: {
          marginTop: "5rem"
        },
        littleSpace:{
          marginTop: "2.5rem",
        },
        grid:{
          display: "flex", 
          marginTop: "-12rem",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap", 
        },
        // customizing the search bar
        search: {
          marginTop: "2rem",
          marginBottom: "11rem",
          display: "center",
          justifyContent: "center",
          // round search bar 
          borderRadius: "10px",
          // border color
          borderColor: "#AFDCEB",
          // border width
          borderWidth: "10px",
          // border style
          borderStyle: "solid",
          // background color
          backgroundColor: "#c7d8ed",
          // padding
          padding: "10%",
          // shift background rightward 
          backgroundPosition: "center",
          // margin
          margin: "25%",
        }
      })
    const classes = styles(); 
    return (
        <div>
            <div className={`${classes.search} ${classes.wrapper}`}>
                {/* implement the search bar at the center */}
                <SearchBar />
            </div>
            <div className={`${classes.grid} ${classes.littleSpace}`}>
                <Grid icon={<SchoolIcon style={{ fill: "#5EA780", height: "125", width: "125" }} />} title="Education Discounts" btnTitle="Show me More" />
                <Grid icon={<ForestIcon style={{ fill: "#E69426", height: "125", width: "125" }} />} title="Environmental-Friendly" btnTitle="Show me More" />
                <Grid icon={<CasinoIcon style={{ fill: "#2EA09D", height: "125", width: "125" }} />} title="Feeling Lucky?" btnTitle="Show me More" />
            </div>
        </div>
    )
}


export default Home