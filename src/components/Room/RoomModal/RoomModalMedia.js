import "./RoomModalMedia.css"
import { IoCloseOutline } from "react-icons/io5";
import iconimgs from '../../../assets/room/icons/imgs.svg'
import iconvideos from '../../../assets/room/icons/videos.svg'
import iconvisit from '../../../assets/room/icons/visits.svg'
import iconimgshover from '../../../assets/room/icons/imgs-hover.svg'
import iconvideoshover from '../../../assets/room/icons/videos-hover.svg'
import iconvisithover from '../../../assets/room/icons/visits-hover.svg'
import Modal from 'react-modal';

Modal.setAppElement('#root');

const RoomModalMedia = ({ isOpen, closeModal, activeTab, setActiveTab , lotData }) => {

    return (
      <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Room Modal Media"
      >
        <div className='container'>
            <div className='modal-header'>
                <button onClick={closeModal} className='btn btn-close'>Close <IoCloseOutline/></button>
                
                <ul className="nav nav-tabs">
                    <li
                        className={activeTab === 'tab1' ? 'nav-item active' : 'nav-item '}
                        onClick={() => setActiveTab('tab1')}
                    >
                        <span className='nav-link'>
                            <img src={iconimgs} className='icon' alt="photos"/><img src={iconimgshover} className='icon-hover' alt="photos"/> photos
                        </span>
                    </li>
                    <li
                        className={activeTab === 'tab2' ? 'nav-item active' : 'nav-item'}
                        onClick={() => setActiveTab('tab2')}
                    >
                        <span className='nav-link'>
                            <img src={iconvideos} className='icon' alt="video"/><img src={iconvideoshover} className='icon-hover' alt="video"/> video
                        </span> 
                    </li>
                    <li
                        className={activeTab === 'tab3' ? 'nav-item active' : 'nav-item'}
                        onClick={() => setActiveTab('tab3')}
                    >
                        <span className='nav-link'>
                            <img src={iconvisit} className='icon' alt="Visit"/><img src={iconvisithover} className='icon-hover' alt="Visit"/> 360° visit
                        </span>
                    </li>
                </ul>
            
            </div>
            <div className='modal-body'>
                <div className='modal-tabs'>

                    <div className="tab-content">
                    {activeTab === 'tab1' && (
  <div className='tab-panel'>
    <ul className='gallery-imgs row m-0'>
      {lotData && lotData.media && lotData.media
        .filter((media) => media.mime_type.startsWith('image'))
        .map((image, index) => (
          <li key={index} className='itm-img col-md-12 p-0'>
            <img src={image.original_url} alt={`Room ${index}`} className='img-fluid' />
          </li>
        ))
      }
    </ul>
  </div>
)}

{activeTab === 'tab2' && (
  <div className='tab-panel'>
    <ul className='gallery-videos row m-0'>
      {lotData && lotData.media && lotData.media
        .filter((media) => media.mime_type.startsWith('video'))
        .map((video, index) => (
          <li key={index} className='itm-video col-md-12 p-0'>
          <video
           src={video.original_url}
           title={`Video ${index}`}
           controls
           frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           allowfullscreen
          ></video>

          </li>
        ))
      }
    </ul>
  </div>
)}

                        {activeTab === 'tab3' && (
                            <div className='tab-panel'>
                                <ul className='gallery-videos row m-0'>
                                    <li className='itm-video col-md-12 p-0'><iframe src="https://www.youtube.com/embed/aarWe5yf6i8?si=SU6Jvd8K0RgRKs7-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></li>
                                </ul>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
      </Modal>
      </>
      )
    }
  
export default RoomModalMedia