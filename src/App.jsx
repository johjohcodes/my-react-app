import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import TodoTitle from './components/TodoTitle'
import PopUp from './components/popUp'
// import Counter from './components/counter'
import ArrayCounter from './components/ArryCounter'

import IconGrid from './components/IconGrid.jsx'



function App() {
  // creating variables in react
   const [popUpOpen, setpopupOpen]= useState(false);
   
  // let popUpOpen = false;
  function togglePopUp() {
    setpopupOpen(true)
    console.log("parent is notified");
    
  //   popUpOpen = !popUpOpen;  
  //   console.log(popUpOpen);
  }
  useEffect(() => {
    console.log("when components mount");
    // this will run only when the component mounts
  },[])
  
  useEffect(() => {
    console.log(`when components mount AND ${popUpOpen} changes`);
  },[popUpOpen]); // this will run only when popUpOpen changes

    useEffect(() => {
      console.log("on every render");
      
    })

    
  
  return (
    <>
        <ArrayCounter/>
        <IconGrid/>
       <TodoTitle/>
       <div>
        {/* <input type="text" onChange={(event)=>{
          console.log(event.target.value);
          
        }} /> */}
        <button onClick={()=> setpopupOpen(true)}>Add to do</button>
       </div>
       <Todo  togglePopUp = {togglePopUp}task = "learn react"
       description = "code like a manic"/>
       <Todo togglePopUp = {togglePopUp}task = "finish asap"
       description = "debug, debug, debug"/>
       <Todo togglePopUp = {togglePopUp} task = "earn $100k+"/>
       
      { popUpOpen &&(
        < PopUp 
        title = "are you 100% sure?"
        onClose = {() => setpopupOpen(false)}/>
        )}
      
       
        
    
        
    </>
  )
}

export default App;


/* 
topics learned react 
1. components
2. props
3. eventhandlers onchange, onclick, onsubmit onClose
4. react hooks useState : creating state variables
5. useeffect hooks

*/  
