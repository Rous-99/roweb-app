import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Portfolio from './components/Portfolio.jsx';
import Form from './components/Form.jsx';
import Footer from './components/Footer.jsx';
import useLocalStorage from 'use-local-storage';



function App() {
  const [count, setCount] = useState(0)
  //comprobamos si el user tiene un tema seleccionado en los ajustes del navegador
  const defaultDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
  //creamos una variable de cambio para localstorage
  const[theme,setTheme] = useLocalStorage('theme', defaultDark ? 'dark': 'light');
  //si dark esta seleccionado a theme le ponemos el valor dark, sino el valor light

  const [darkMode, setDarkMode]=useState(false);

  const switchTheme = () =>{
    const newTheme = theme ==='light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  //cuando llamemos a la funcion para cambiar el tema vamos a crear una variable nueva, newTheme que va a ser igual al valor que el usuario tenga como preferencia. Si ese valor es light entonces cambiamos a dark el tema, sino lo cambiamos a light. Con setTheme pasamos ese nuevo valor para cambiar el tema.

  //FUNCION ENVIAR FORM
  // const addMessage = () => {
  //   console.log('new task');
  // }

  return (
    <div className='app' data-theme={theme}>
      <Header />
      <Home />
      <About />
      <Skills />
      <Education />
      <Portfolio />
      <Form />
      <Footer />
      <button className='theme__button' onClick={switchTheme}>{darkMode ? (<i className="uil uil-moon change__theme" id="theme__button" onClick={() => setDarkMode(!darkMode)} ></i>): (<i className="uil uil-sun change__theme" id="theme__button"onClick={() => setDarkMode(!darkMode)}></i>)}
      </button>
    </div>
  
  )
}

export default App

// navigator.serviceWorker.register('/sw.js');