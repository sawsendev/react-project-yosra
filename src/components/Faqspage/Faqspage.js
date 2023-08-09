import React from 'react'

const Faqspage = () => {
  return (
    <div className='container-fluid'>
      <h1>Frequently asked questions</h1>
      <div className='Renting'>
       <h3>Renting with Finecribs</h3>
       <select name="renting" id="renting">
            <option value="">Prepare your move</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
       </select>

       <select name="renting" id="renting">
            <option value="">During your stay</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
       </select>

       <select name="renting" id="renting">
            <option value="">Rent queries</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
       </select>

       <select name="renting" id="renting">
            <option value="">Prepare your check-out</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
       </select>


       <select name="renting" id="renting">
            <option value="">Before you book</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
       </select>


      </div>
    </div>
  )
}

export default Faqspage;
