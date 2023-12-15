import React, { useState, useEffect } from 'react'
import "./Faqspage.css"
import {FaqspageTableRenting, FaqspageTablePartnering} from "../../Data/Data"
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import {BsArrowRightShort} from 'react-icons/bs';
import { IoCloseOutline } from "react-icons/io5";
import Modal from 'react-modal';
import { Helmet } from 'react-helmet';
import {URL} from '../Variables'
import ReactGA from 'react-ga';
const Faqspage = () => {
     const [toggleState, setToggleState] = useState(1);
     const [selected, setSelected] = useState(null);
     const [isFrenchModalOpen, setFrenchModalOpen] = useState(false);
     const [isEnglishModalOpen, setEnglishModalOpen] = useState(false);
     const [isItalianModalOpen, setItalianModalOpen] = useState(false);

 
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
   

     
   
     const openFrench = () => {
       setFrenchModalOpen(true);
     };
   
     const openEnglish = () => {
       setEnglishModalOpen(true);
     };
   
     const openItalian = () => {
       setItalianModalOpen(true);
     };
   
     const closeModal = () => {
       setFrenchModalOpen(false);
       setEnglishModalOpen(false);
       setItalianModalOpen(false);
     };
   
     const frenchModalContent = (
          <div className='modal-video-text'>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bGUGb5K_QLE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        
     );
   
     const englishModalContent = (
      <div className='modal-video-text'>
          <iframe width="560" height="315" src="https://youtube.com/embed/w-SLM-4HSQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       </div>
     );
   
     const italianModalContent = (
       <div className='modal-video-text'>
         <iframe width="560" height="315" src="https://youtube.com/embed/lz_VJ_t0FxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       </div>
     );
     useEffect(() => {
          ReactGA.pageview(window.location.pathname + window.location.search);
        }, []);
        
   


return ( 
    <div id='faq'>
     <Helmet>
          <title>FAQ</title>
          <meta
          name="description"
          content="Fine Cribs, beautiful flatshares designed for communal living"
          />
          <link rel="canonical" href={`${URL}`} />
     </Helmet>
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
                                                            
                                                            <div className={`tab-pane fade ${subIndex === 0 ? 'show active' : ''}`} id={`pills-${subIndex}${index}`} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                                 { (subIndex === 5 && index === 0) || (subIndex === 0 && index === 1) ? (
                                                                      <div>
                                                                           <div dangerouslySetInnerHTML={{ __html: subTitle.answer }} />
                                                                           <button className='link-video' onClick={openEnglish}>English</button>, <button className='link-video' onClick={openFrench}>French</button>,  <button className='link-video' onClick={openItalian}>Italian</button>
                                                                      </div>
                                                                      ) : (
                                                                      <div>
                                                                           <div dangerouslySetInnerHTML={{ __html: subTitle.answer }} />
                                                                      </div>
                                                                 )}
                                                                  
                                                            </div>
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
                              <div key={index} className='collapseRenting my-3'>
                                   <div className='TitlesRenting px-3 py-2 align-items-center d-flex justify-content-between' onClick={() => toggleSubTabs(index)}>
                                        <h2 className='mb-0'>{renting.title}</h2>
                                        <span>{selected === index ? ( <IoIosArrowUp className='arrow'/> ) : ( <IoIosArrowDown className='arrow'/> )}</span>
                                   </div>
                                   <div className={`subAnswers active-content`} >
                                        
                                        <div className='d-flex align-items-stretch faq_tabspills'>
                                             <div className='nav flex-column nav-pills' id='v-pills-tab' role="tablist" aria-orientation="vertical">
                                                  {renting.subTitles ? (         
                                                       renting.subTitles.map((subTitle, subIndex) => (
                                                            <button className={`nav-link ${subIndex === 0 ? 'active' : ''}`} id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target={`#pills-2${subIndex}${index}`} type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">{subTitle.title}</button>
                                                       ))                                   
                                                  ) : (
                                                       <div>No subTitles available</div>
                                                  )}
                                             </div>
                                             <div className='tab-content' id='v-pills-tabContent'>
                                                  {renting.subTitles ? (         
                                                       renting.subTitles.map((subTitle, subIndex) => (
                                                            <div className={`tab-pane fade ${subIndex === 0 ? 'show active' : ''}`} id={`pills-2${subIndex}${index}`} role="tabpanel" aria-labelledby="v-pills-home-tab"> <div dangerouslySetInnerHTML={{ __html: subTitle.answer }} /></div>
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
            


          

           </div>

        </div>
    </div>
    
     <Modal isOpen={isFrenchModalOpen || isEnglishModalOpen || isItalianModalOpen} onClose={closeModal} className="reactmodal-modal-video" portalClassName="reactmodal-portal-modal-video ReactModalPortal">
          <div className='modal-video-overlay'>
            <div className='modal-video-content'>
               <div className='modal-video-head'>
                    <div className='h2'>The instructions in 
                    {isFrenchModalOpen ? ' French' : null}
                    {isEnglishModalOpen ? ' English' : null}
                    {isItalianModalOpen ? ' Italian' : null}
                    </div>
                    <button onClick={closeModal} className='btn btn-close'><IoCloseOutline/></button>
               </div>
               <div className='modal-video-body'>
                    {isFrenchModalOpen ? frenchModalContent : null}
                    {isEnglishModalOpen ? englishModalContent : null}
                    {isItalianModalOpen ? italianModalContent : null}
               </div>
            </div>
          </div>
     </Modal>
    </div>
    
  )
}

export default Faqspage

