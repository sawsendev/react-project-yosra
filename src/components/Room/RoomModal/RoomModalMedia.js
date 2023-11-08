import "./RoomModalMedia.css"
import { IoCloseOutline } from "react-icons/io5";
import iconimgs from '../../../assets/room/icons/imgs.svg'
import iconvideos from '../../../assets/room/icons/videos.svg'
import iconvisit from '../../../assets/room/icons/visits.svg'
import iconfloorplan from '../../../assets/room/icons/floorplan.svg'
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
                {lotData &&
                <ul className="nav nav-tabs">
  {lotData && lotData.media && lotData.media
    .filter((media) => media.mime_type.startsWith('image')&& media.collection_name !== 'floorpan') && (
  <li
    className={activeTab === 'tab1' ? 'nav-item active' : 'nav-item '}
    onClick={() => setActiveTab('tab1')}
  >
    <span className='nav-link'>
      <img src={iconimgs} className='icon' alt="photos"/><img src={iconimgshover} className='icon-hover' alt="photos"/> photos
    </span>
  </li> )}

  {lotData&& lotData.media && lotData.media.some((media) => media.mime_type.startsWith('video')) && (
    <li
      className={activeTab === 'tab2' ? 'nav-item active' : 'nav-item'}
      onClick={() => setActiveTab('tab2')}
    >
      <span className='nav-link'>
        <img src={iconvideos} className='icon' alt="video"/><img src={iconvideoshover} className='icon-hover' alt="video"/> video
      </span>
    </li>
  )}
 {lotData && (lotData.image_360 || lotData.video_360)&&(
  <li
    className={activeTab === 'tab3' ? 'nav-item active' : 'nav-item'}
    onClick={() => setActiveTab('tab3')}
  >
    <span className='nav-link'>
      <img src={iconvisit} className='icon' alt="Visit"/><img src={iconvisithover} className='icon-hover' alt="Visit"/> 360° visit
    </span>
  </li>
  )}

{lotData && lotData.media && lotData.media 
                            .filter((media) =>media.collection_name === 'floorpan').length >0 && (
  <li
    className={activeTab === 'tab4' ? 'nav-item active' : 'nav-item'}
    onClick={() => setActiveTab('tab4')}
  >
    <span className='nav-link'>
      <img src={iconfloorplan} className='icon' alt="floorplan"/><img src={iconfloorplan} className='icon-hover' alt="floorplan"/> floorplan
    </span>
  </li> )}
</ul>}

            
            </div>
            <div className='modal-body'>
                <div className='modal-tabs'>

                    <div className="tab-content">
                    {activeTab === 'tab1' && (
  <div className='tab-panel'>
    <ul className='gallery-imgs row m-0'>
      {lotData && lotData.media && lotData.media
        .filter((media) => media.mime_type.startsWith('image') && media.collection_name !== 'floorpan')
        .map((image, index) => (
          <li key={index} className={`itm-img col-md-${index % 3 === 0 ? 12 : 6} p-0`}>
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
                              <li key={index} className={`itm-img col-md-${index % 3 === 0 ? 12 : 6} p-0`}>
                              <video
                              src={video.original_url}
                              title={`Video ${index}`}
                              controls
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                              style={{width:"100%",height:"500px"}}
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
        {lotData && (
  <li className='itm-video col-md-12 p-0'>
    {lotData.image_360 && (
      <iframe
        title="Room360"
        width='853'
        height='480'
        src={lotData.image_360}
      ></iframe>
    )}
    {lotData.video_360 && (
      <video
                              src={lotData.video_360}
                              
                              controls
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                              style={{width:"100%"}}
                              ></video>
    )}
  </li>
)}

            
        </ul>
    </div>
)}

                        {activeTab === 'tab4' && (
                            <div className='tab-panel'>
                                <ul className='gallery-videos row m-0'>
                                {lotData && lotData.media && lotData.media
                            .filter((media) =>media.collection_name === 'floorpan')
                            .map((image, index) => (
                              <li key={index} className='itm-video col-md-12 p-0'>
                              <img src={image.original_url} alt={`Room ${index}`} className='img-fluid' />

                              </li>
                            ))
                          }
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