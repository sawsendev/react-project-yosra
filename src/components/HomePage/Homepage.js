import React from 'react'
import Reactions from './Reactions/Reactions';
import ReasonToRent from './ReasonToRent/ReasonToRent';
import StepsToBook from './StepsToBook/StepsToBook';
import Intro from './Intro/Intro';
import Feedback from './Feedback/Feedback';
import ExploreMore from './ExploreMore/ExploreMore';
import './Homepage.css'

const Homepage = () => {
  return (
    <div id='Home' className='homepage-container'>
        <Intro/>
        <Reactions></Reactions>
        <ExploreMore/>
        <ReasonToRent/>
        <StepsToBook/>
        <Feedback/>
    </div>
  )
}

export default Homepage
