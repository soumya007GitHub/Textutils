import NavBar from './components/NavBar';
import Notepad from './components/Notepad';
import Alert from './components/Alert';
import Accordion from './components/Accordion';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('dark');
  const [text, setText] = useState('light');
  const [alert, setAlert] = useState(null);
  const toggleMode = ()=>{
    if(mode === 'dark'){
    setMode('light');
    setText('dark');
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    setAlert({message:"Light Mode Enabled !", type:"danger"});
    setTimeout(() => {
      setAlert(null);
    }, 1500);
    }
    else{
      setMode('dark');
      setText('light');
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setAlert({message:"Dark Mode Enabled !", type:"primary"});
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
  }
  return (
    <>
    <BrowserRouter>
    <NavBar mode={mode} toggleMode = {toggleMode} text={text}/>
    <Alert alert = {alert}/>
    <div className="container mt-3">
    <Routes>
      <Route path="/Home" element = {<Notepad heading="Enter Any Paragraph" mode={mode}/>}></Route>
      <Route path="/About" element = {<Accordion/>}></Route>
      </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
