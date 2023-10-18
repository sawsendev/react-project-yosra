import React, { useState, useEffect } from 'react'
import "./Faqspage.css"
import {FaqspageTableRenting, FaqspageTablePartnering} from "../../Data/Data"
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import {BsArrowRightShort} from 'react-icons/bs'

const Faqspage = () => {
     const [toggleState, setToggleState] = useState(1);
     const [selected, setSelected] = useState(null);

 
     const toggleTab = (index) => {
       setToggleState(index);
     }
   
     const toggleSubTabs = (index) => {
       if (selected === index) {
         setSelected(null);
       } else {
         setSelected(index);
       }
     }
   


return (
    <div>
     <Breadcrumbs/>
     <div className='container FaqpagesContainer'>
     <h1 className='text-center my-5'>Frequently asked questions</h1>
       <div className='faq-tabs'>
          {/* tabs */}
          <div className='bloc-tabs row m-0'>
               <div className={`col-md-6 text-center px-0 pb-3 mb-3  ${toggleState === 1 ? "active-tabs" : "tabs"}`}
               onClick={()=>toggleTab(1)}>Renting with Finecribs</div>
               <div className={`col-md-6 text-center px-0 pb-3 mb-3 ${toggleState === 2 ? "active-tabs" : "tabs"}`}
               onClick={()=>toggleTab(2)}>Partnering with Finecribs</div>
          </div>
          <div className='tabs-content my-3'>
               <div  className={toggleState === 1 ? " active-content" : "content"} onClick={()=>toggleTab(1)}>

                    <div className='display-block '>
                         {FaqspageTableRenting.map((renting, index) => (
                              <div key={index} className='collapseRenting my-3'>
                                   <div className='TitlesRenting px-3 py-2 align-items-center d-flex justify-content-between' onClick={() => toggleSubTabs(index)}>
                                        <h2 className='mb-0'>{renting.title}</h2>
                                        <span>{selected === index ? ( <IoIosArrowUp className='arrow'/> ) : ( <IoIosArrowDown className='arrow'/> )}</span>
                                   </div>
                                   <div className={`subAnswers ${selected === index ? "active-content" : "content"}`} >
                                        
                                        <div className='d-flex align-items-stretch faq_tabspills'>
                                             <div className='nav flex-column nav-pills' id='v-pills-tab' role="tablist" aria-orientation="vertical">
                                                  {renting.subTitles ? (         
                                                       renting.subTitles.map((subTitle, subIndex) => (
                                                            <button className={`nav-link ${subIndex === 0 ? 'active' : ''}`} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target={`#pills-${subIndex}${index}`} type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">{subTitle.title}</button>
                                                       ))                                   
                                                  ) : (
                                                       <div>No subTitles available</div>
                                                  )}
                                             </div>
                                             <div className='tab-content' id='v-pills-tabContent'>
                                                  {renting.subTitles ? (         
                                                       renting.subTitles.map((subTitle, subIndex) => (
                                                            <div className={`tab-pane fade ${subIndex === 0 ? 'show active' : ''}`} id={`pills-${subIndex}${index}`} role="tabpanel" aria-labelledby="v-pills-home-tab"> <div dangerouslySetInnerHTML={{ __html: subTitle.answer }} /></div>
                                                       ))                                   
                                                  ) : (
                                                       <div>No subTitles available</div>
                                                  )}
                                             </div>
                                        </div>

                                   </div>
                              </div>
                         ))}
                    </div>

               </div>
          {/* end tab-content renting Tab 1 */}
               <div  className={toggleState === 2 ? " active-content" : "content"} onClick={()=>toggleTab(2)}>
                    <div className='display-block '>
                         {FaqspageTablePartnering.map((renting, index) => (
                                   <div className={` subAnswers `}>
                                        
                                        <div className='d-flex align-items-stretch faq_tabspills'>
                                             <div className='nav flex-column nav-pills' id='v-pills-tab' role="tablist" aria-orientation="vertical">
                                                  {renting.subTitles ? (         
                                                       renting.subTitles.map((subTitle, subIndex) => (
                                                            <button className={`nav-link ${subIndex === 0 ? 'active' : ''}`} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target={`#pills-${subIndex}${index}`} type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">{subTitle.title}</button>
                                                       ))                                   
                                                  ) : (
                                                       <div>No subTitles available</div>
                                                  )}
                                             </div>
                                             <div className='tab-content' id='v-pills-tabContent'>
                                                  {renting.subTitles ? (         
                                                       renting.subTitles.map((subTitle, subIndex) => (
                                                            <div className={`tab-pane fade ${subIndex === 0 ? 'show active' : ''}`} id={`pills-${subIndex}${index}`} role="tabpanel" aria-labelledby="v-pills-home-tab"> <div dangerouslySetInnerHTML={{ __html: subTitle.answer }} /></div>
                                                       ))                                   
                                                  ) : (
                                                       <div>No subTitles available</div>
                                                  )}
                                             </div>
                                        </div>
                                   </div>
                         ))}
                    </div>

               </div>
            


          

           </div>

        </div>
    </div>
    </div>
    
  )
}

export default Faqspage

