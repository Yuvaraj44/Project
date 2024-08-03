import React from 'react'
import "../Home/Forme.css";


function Forme() {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    
      <div className='dev'>
        form
        <form className='dev1'>
          <input className='form1' type='name' name='name' placeholder='Enter your name ' required/>
          <input className='form1' type='mail' name='name' placeholder='Enter your mail ' required/>
          <input className='form1' type='date' name='name' placeholder='Enter your name ' required/>
          <input className='form1' type='age' name='name' placeholder='Enter your name ' required/>
          <input className='form1' type='checkbox' name='name' required I accept the terms and conditions ></input>
          <button> submit</button>
        </form>
      </div>
    </>
 
  )
}

export default Forme