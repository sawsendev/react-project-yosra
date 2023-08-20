import React, {useState} from 'react'
import "./Faqspage.css"
import {FaqspageTableRenting} from "../../Data/Data"


const Faqspage = () => {
     const [toggleState, setToggleState]=useState(1)
     const [selected, setSelected]=useState(null)
     const [selectedAnswer, setSelectedAnswer] =useState(null)

  
     const toggleTab=(index)=>{
       setToggleState(index)
     }

     const toggleSubTabs=(index)=>{
          if(selected === index) {
             return  setSelected(null)
          }
          return setSelected(index)
     }

     const toggleSubTabsAnswers=(index)=>{
          if(selectedAnswer === index) {
               return  setSelectedAnswer(null)
            }
           return setSelectedAnswer(index)
     }


     return (
    <div>
        <div className='container FaqpagesContainer'>
          <h1 className='text-center my-5'>Frequently asked questions</h1>
          {/* tabs */}
           <div className='bloc-tabs row'>
               <div className={`col-md-6 text-center pb-3 mb-3  ${toggleState === 1 ? "active-tabs" : "tabs"}`}
               onClick={()=>toggleTab(1)}>Renting with Finecribs</div>
               <div className={`col-md-6 text-center pb-3 mb-3 ${toggleState === 2 ? "active-tabs" : "tabs"}`}
               onClick={()=>toggleTab(2)}>Partnering with Finecribs</div>
           </div>
           <div className='tabs-content'>
            <div  className={toggleState === 1 ? " active-content" : "content"}
               onClick={()=>toggleTab(1)}>
                    
               <div className='display-block'>
               {FaqspageTableRenting.map((renting, index) => (
               <div key={index}>
                    <div
                    className='TitlesRenting my-4 pe-4 align-items-center d-flex justify-content-between'
                    onClick={() => toggleSubTabs(index)}
                    >
                    <h2 className='p-3'>{renting.title}</h2>
                    <span
                         dangerouslySetInnerHTML={{
                         __html: selected === index ? '&#8891;' : '&#8892;',
                         }}
                    ></span>

                    </div>
                    <div className={selected === index ? "active-content" : "content"}>
                    {renting.subTitles ? (
                         renting.subTitles.map((subTitle, subIndex) => (
                         <div key={subIndex} className='subTitlesRenting my-2 p-4 row align-items-center justify-content-between'>
                         <h4 className='col-lg-3 col-sm-12'
                         onClick={()=>toggleSubTabsAnswers(subIndex)}>{subTitle.title}</h4>
                         <p className={`col-lg-9 col-sm-12  ${selectedAnswer === subIndex ? "active-content" : "content"}`}>{subTitle.answer}</p>
                         </div>
                         ))
                    ) : (
                         <div>No subTitles available</div>
                    )}
                    </div>
               </div>
               ))}
               </div>

            </div>
            


          
            <div className={toggleState === 2 ? " active-content" : "content"}>
               <h2>content2</h2>
               <p>Lorem ipsum is placeholder text commonly used in the graphic, 
            print, and publishing industries for previewing layouts and visual mockups</p>
            </div>

           </div>
        </div>
    </div>
  )
}

export default Faqspage

