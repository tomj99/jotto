import React from "react";
import PropTypes from "prop-types";
const Congrats = (props) => {
  if (props.success) {
    return (
    <div data-test="component-congrats">
      <span data-test="congrats-message">
        Congrats Bitch! You Guessed the Word!
      </span>
    </div>
    );
  } else {
    return (
        <div data-test="component-congrats" />
    );
  }
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,

};

export default Congrats;

//if you don't need a name for adding props you can do this
// export default (props) => {
//     if (props.success) {
//         return (
//             <div data-test="component-congrats">
//           <span data-test="congrats-message">
//             Congrats Bitch! You Guessed the Word!
//           </span>
//             </div>
//         );
//     } else {
//         return (
//             <div data-test="component-congrats" />
//         );
//     }
// }


//older way to do this
// function Congrats (props) {
//   if (props.success) {
//     return (
//         <div data-test="component-congrats">
//           <span data-test="congrats-message">
//             Congrats Bitch! You Guessed the Word!
//           </span>
//         </div>
//     );
//   } else {
//     return (
//         <div data-test="component-congrats" />
//     );
//   }
// }
//
// export default Congrats;
