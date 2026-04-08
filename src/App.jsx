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
import { useLanguage } from '../src/context/LanguageContext';

export default function App() {

  const { darkMode } = useTheme();
  const { language } = useLanguage();

useEffect(() => {
  axios
    .post(
      'https://reqres.in/api/workintech',
      { darkMode, language },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'pub_38ae796452887f8ad58e595da92d13189debc04e1aef5927d68bdfcde88d9c9e',
        },
      }
    )
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error.message));
}, [darkMode, language]);

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
