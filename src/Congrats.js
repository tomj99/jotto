import React from "react";

export default (props) => {
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
