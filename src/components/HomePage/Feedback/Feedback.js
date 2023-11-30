import React, { useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Feedback.css";
import { FeedbacksTable } from "../../../Data/Data";
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
const Feedback = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3 // Vous pouvez ajuster le nombre d'éléments à afficher par diapositive ici
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1
    }
  };

  const feedbackItems = FeedbacksTable.map((feedback, index) => (
    <div key={index} className="feedback-icons-li d-flex gap-3 my-4">
      <div className="row  justify-content-between">
        <div className="col-sm-3 col-md-4 mb-3">
          <img src={feedback.src} alt="icons" className="" />
        </div>
        <div className="feedback-icons-container col">
          <div className="feedback-icons-content">
            <span>{feedback.name}</span>
            <p>{feedback.content}</p>
          </div>
        </div>
      </div>
    </div>
  ));
  

  const [isPrevActive, setIsPrevActive] = useState(true);
  const [isNextActive, setIsNextActive] = useState(true);
  const carouselRef = useRef(null);

  const onClickPrev = () => {
    if (carouselRef.current) {
      setIsPrevActive(true);
      setIsNextActive(false);
      carouselRef.current.previous();
    }
  };

  const onClickNext = () => {
    if (carouselRef.current) {
      setIsPrevActive(false);
      setIsNextActive(true);
      carouselRef.current.next();
    }
  };

  const onMouseUp = () => {
    setIsPrevActive(true);
    setIsNextActive(true);
  };

  return (
    <div className="Feedback-container mb-5 pb-4 container">
      <h2>Our flatmates talk about their experience with Fine cribs</h2>
      <div>
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite={true}
          containerClass="carousel-container"
        >
          {feedbackItems}
        </Carousel>
        <div className="button-container">
          <div
            onClick={onClickPrev}
            onMouseUp={onMouseUp}
            className={`custom-prev-arrow`}
          >
           <BsArrowLeft className="arrow-icon" />
          </div>
          <div
            onClick={onClickNext}
            onMouseUp={onMouseUp}
            className={`custom-next-arrow `}
          >
           <BsArrowRight className="arrow-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
