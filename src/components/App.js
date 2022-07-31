import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleClick = (event) =>{
    // use console.log
    if(event.target.id === 'button-a') {
      console.log('Button id is:-button-a');
    } else if(event.target.id === 'button-b') {
      console.log('Button id is:-button-b');
    }


  }

  // do not remove the two buttons or change their id
  return (
    <div id="main">
      <button onClick={handleClick} id="button-a">Button A</button>
      <button onClick={handleClick} id="button-b">Button B</button>
    </div>
  )
}


export default App;
