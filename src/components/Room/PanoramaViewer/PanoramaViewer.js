// import React, { Component } from "react";
// import ReactPannellum, { getConfig } from "react-pannellum";

// class PanoramaViewer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       imageUrl: props.imageUrl || "https://pannellum.org/images/alma.jpg", // URL par défaut
//     };
//   }

//   click() {
//     console.log(getConfig());
//   }

//   render() {
//     const { imageUrl } = this.state;
//     const config = {
//       autoRotate: -2,
//     };

//     return (
//       <div>
//         <ReactPannellum
//           id="1"
//           sceneId="firstScene"
//           imageSource={imageUrl}
//           config={config}
//         />
//       </div>
//     );
//   }
// }

// export default PanoramaViewer;
