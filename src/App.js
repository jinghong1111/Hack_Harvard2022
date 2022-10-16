import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
//import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
// IMPORTANT, this is for multiple webpages 
  
import './App.css';
//import icons 
import SchoolIcon from '@mui/icons-material/School';
import ForestIcon from '@mui/icons-material/Forest';
import CasinoIcon from '@mui/icons-material/Casino';
// for page directs 
import { Route, Routes, useNavigate } from 'react-router-dom';
// import compare from pages
import Compare from './components/Compare';


const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

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


function App() {
  const classes = styles(); 


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      {/* Make a button to test the page direct */ }
 


       { /*<NavBar/>*/ }
        <div className={classes.wrapper}>
          <Typography variant="h2" className={classes.bigSpace} color="primary">
             Price Ain't Right 
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            Find the BEST deals on the web with one simple search! (And it's free!)
          </Typography>
        </div>

       <div className={`${classes.search} ${classes.wrapper}`}>
      {/* implement the search bar at the center */}
      <SearchBar/>
      </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<SchoolIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="Education Discounts" btnTitle="Show me More"/>
          <Grid icon={<ForestIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="Environmental-Friendly" btnTitle="Show me More"/>
          <Grid icon={<CasinoIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Feeling Lucky?" btnTitle="Show me More"/>
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
