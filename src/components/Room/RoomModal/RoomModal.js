import React, { useRef, useState } from 'react';
import "./RoomModal.css"
import iconimgs from '../../../assets/room/icons/imgs.svg'
import iconvideos from '../../../assets/room/icons/videos.svg'
import iconvisit from '../../../assets/room/icons/visits.svg'
import iconimgshover from '../../../assets/room/icons/imgs-hover.svg'
import iconvideoshover from '../../../assets/room/icons/videos-hover.svg'
import iconvisithover from '../../../assets/room/icons/visits-hover.svg'
import room1 from '../../../assets/room/room-1.jpg'
import room21 from '../../../assets/room/room-21.jpg'
import room22 from '../../../assets/room/room-22.jpg'
import room3 from '../../../assets/room/room-3.jpg';

import { IoCloseOutline } from "react-icons/io5";

const RoomModal = () => {
    return (
      <>
        <div className='modal modal-fullscreen fade' id='RoomMedia' tabindex="-1" aria-labelledby='RoomMediaLabel' aria-hidden="true">
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='container'>
                    <div className='modal-header'>
                        <button type="button" className='btn-close' data-bs-dismiss="modal" aria-label="Close"><span>Close</span><IoCloseOutline /></button>
                            <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                <li className='nav-item' role='presentation'>
                                    <button className='nav-link active' id='photos-tab' data-bs-toggle='tab' data-bs-target="#photos" type="button" role="tab" aria-controls="photos" aria-selected="true"><img src={iconimgs} className='icon' alt="photos"/><img src={iconimgshover} className='icon-hover' alt="photos"/> photos</button>
                                </li>
                                <li className='nav-item' role="presentation">
                                    <button className='nav-link' id='video-tab' data-bs-toggle='tab' data-bs-target="#video" type="button" role="tab" aria-controls="video" aria-selected="false"><img src={iconvideos} className='icon' alt="video"/><img src={iconvideoshover} className='icon-hover' alt="video"/> video</button>
                                </li>
                                <li className='nav-item' role='presentation'>
                                    <button className='nav-link' id='visit-tab' data-bs-toggle='tab' data-bs-target="#visit" type="button" role="tab" aria-controls="visit" aria-selected="false"><img src={iconvisit} className='icon' alt="Visit"/><img src={iconvisithover} className='icon-hover' alt="Visit"/> 360° visit</button>
                                </li>
                            </ul>
                    </div>
                    <div className='modal-body'>
                        <div className='modal-tabs'>
                            <div className='tab-content' id="myTabContent">
                                <div className='tab-pane fade show active' id='photos' role='tabpanel' aria-labelledby='photos-tab'>
                                    <ul className='gallery-imgs row m-0'>
                                        <li className='itm-img col-md-12 p-0'><img src={room1} alt='Room' className='img-fluid'/></li>
                                        <li className='itm-img col-md-6 p-0'><img src={room21} alt='Room' className='img-fluid'/></li>
                                        <li className='itm-img col-md-6 p-0'><img src={room22} alt='Room' className='img-fluid'/></li>
                                        <li className='itm-img col-md-12 p-0'><img src={room3} alt='Room' className='img-fluid'/></li>
                                    </ul>
                                </div>
                                <div className='tab-pane fade' id='video' role='tabpanel' aria-labelledby='video-tab'>
                                    <ul className='gallery-videos row m-0'>
                                        <li className='itm-video col-md-12 p-0'><iframe src="https://www.youtube.com/embed/6stlCkUDG_s?si=GWF5FnS0cExHwJNT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></li>
                                        <li className='itm-video col-md-6 p-0'><iframe src="https://www.youtube.com/embed/6stlCkUDG_s?si=GWF5FnS0cExHwJNT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></li>
                                        <li className='itm-video col-md-6 p-0'><iframe src="https://www.youtube.com/embed/6stlCkUDG_s?si=GWF5FnS0cExHwJNT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></li>
                                        <li className='itm-video col-md-12 p-0'><iframe src="https://www.youtube.com/embed/6stlCkUDG_s?si=GWF5FnS0cExHwJNT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></li>
                                    </ul>
                                </div>
                                <div className='tab-pane fade' id='visit' role='tabpanel' aria-labelledby='visit-tab'>
                                    <ul className='gallery-videos row m-0'>
                                        <li className='itm-video col-md-12 p-0'><iframe src="https://www.youtube.com/embed/aarWe5yf6i8?si=SU6Jvd8K0RgRKs7-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

      </>
      )
    }
  
export default RoomModal