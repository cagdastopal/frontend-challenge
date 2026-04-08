import './App.css'
import Header from './component/Header'
import Hero from './component/Hero'
import Skills from './component/Skills'
import Profile from './component/Profile'
import Projects from './component/Projects'
import Footer from './component/Footer'
import ModeSwitch from './component/ModeSwitch'
import { useTheme } from './context/ThemeContext';
import axios from 'axios'
import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {

  const { darkMode } = useTheme();
  
  useEffect( () => {
    axios
      .post('https://reqres.in/api/workintech', {
        data: {
          darkMode: darkMode,
        },
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.message));
  }, [darkMode])

  return(
  <>
  <Router>
    <ModeSwitch />
    <Header />
    <Hero />
    <Switch>
      
      <Route path="/" exact>
        <Skills />
        <Profile />
        <Projects />
      </Route>

      <Route path="/skills">
        <Skills />
      </Route>

      <Route path="/profile">
        <Profile />
      </Route>

      <Route path="/projects">
        <Projects />
      </Route>
    </Switch>
    <Footer />
  </Router>
  </>
  )
}
