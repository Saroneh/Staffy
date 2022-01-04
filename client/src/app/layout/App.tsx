import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline, Typography } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import ArtifactDetails from "../../features/catalog/ArtifactDetails";
import Catalog from "../../features/catalog/Catalog";
import GuidePage from "../../features/guides/GuidePage";
import HomePage from "../../features/home/HomePage";
import ToDoPage from "../../features/todo/ToDoPage";
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
    <BrowserRouter>
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

        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/catalog" component={Catalog}></Route>
        <Route exact path="/catalog/:id" component={ArtifactDetails}></Route>
        <Route path="/about/"component={AboutPage}></Route>
        <Route path="/todo/"component={ToDoPage}></Route>
        <Route path="/guides/"component={GuidePage}></Route>
        

        <h4>
          See all to-do tasks below
        </h4>

      </Container>
      </ThemeProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;
