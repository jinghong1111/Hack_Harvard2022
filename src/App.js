import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
//import NavBar from './components/NavBar'

import Footer from './components/Footer'
import Home from './components/Home'
// IMPORTANT, this is for multiple webpages 
  
import './App.css';
//import icons 

// for page directs 
<<<<<<< HEAD
import { Route, Routes, useNavigate } from 'react-router-dom';
// import compare from components
import Compare from './components/Compare';



=======
import { Route, Routes, useNavigate, BrowserRouter} from 'react-router-dom';
// import compare from pages
import Compare from './components/Compare'
>>>>>>> b5dd09b15f9864fbf740a2aebd89f50f6f4601f8

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
      {/* Make a clickable button*/ }


      {/* <NavBar /> */}




       { /*<NavBar/>*/ }
        <div className={classes.wrapper}>
          <Typography variant="h2" className={classes.bigSpace} color="primary">
             Price Ain't Right 
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            Find the BEST deals on the web with one simple search! (And it's free!)
          </Typography>
        </div>

       <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="comparison" element={<Compare/>} />
            </Route>
          </Routes>
       </BrowserRouter>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
