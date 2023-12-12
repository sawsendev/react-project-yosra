// import React, { useState } from 'react';
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css'; // Importez les styles de rc-slider

// const PriceRangeSlider = () => {
//   const [value, setValue] = useState([0, 100]); // Valeurs initiales de la plage de prix

//   const handleSliderChange = (newValue) => {
//     setValue(newValue);
//   };
//   const sliderStyle = {
//     trackStyle: {  background: 'rgba(0, 0, 0, 1)',height:'2px',borderWidth: 1}, // Couleur de la piste
//     handleStyle: [{ border: '1px solid rgba(0, 0, 0, 1)',borderWidth: 1}, { border: '1px solid rgba(0, 0, 0, 1)',borderWidth: 1 }], // Couleur du curseur
      
  
//   };


//   return (
//     <div>
//       <Slider
//         range
//         min={1}
//         max={1000} 
//         value={value}
//         onChange={handleSliderChange}
//         {...sliderStyle}
//       />
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <span>{value[0]}€</span>
//         <span>{value[1]}€</span>
//       </div>
//     </div> 
//   );
// };

// export default PriceRangeSlider;
