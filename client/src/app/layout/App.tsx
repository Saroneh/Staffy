import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline, Typography } from "@mui/material";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";


 

function App() {

  const [darkMode, setDarkMode] =useState(false)
  const paletteType = darkMode ? 'dark' : 'light'

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: darkMode ? "#121212" : "#eaeaea"},
  }});


  function handleChange() {
    setDarkMode(!darkMode)
  }


  return (
    <div className="App">
      <ThemeProvider theme={theme} >
      <CssBaseline/>
      <Header darkMode={darkMode} handleChange={handleChange}/>

      <Container>
        <Container sx={{mb:4}}>
          <Typography variant='h4'>The one tool to empower your staff</Typography>
          <Typography variant='body1'>
            See all guides below
          </Typography>
        </Container>
        <Catalog/>
        

        <h4>
          See all to-do tasks below
        </h4>

      </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
