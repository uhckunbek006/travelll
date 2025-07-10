// import React from "react";
// import bgerror from "../../../../assets/images/adminn.png";
// import "./Error.scss";
// import { SlClose } from "react-icons/sl";
// import { IoCloseSharp } from "react-icons/io5";

// const Error = () => {
//   return (
//     <div
//       id="errorlike"
//       style={{
//         background: `url(${bgerror}) no-repeat center/cover`,
//       }}
//     >
//       <div className="bgerror">
//         <div className="container">
//           <div className="errorlike">
//             <div className="errorlike--blocks">
//               <div className="errorlike--blocks__block">
//                 <a>
//                   <IoCloseSharp />
//                 </a>
//                 <h2>You can't leave a review until you register</h2>
//                 <button>Sig up </button>
//                 <button>Log in</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Error;

import React from "react";
import bgerror from "../../../../assets/images/adminn.png";
import "./Error.scss";
import { SlClose } from "react-icons/sl";
import { IoCloseSharp } from "react-icons/io5";

const Error = () => {
  return (
    <div
      id="errorlike"
      style={{
        background: `url(${bgerror}) no-repeat center/cover`,
      }}
    >
      <div className="bgerror">
        <div className="container">
          <div className="errorlike">
            <div className="errorlike--blocks">
              <div className="errorlike--blocks__block">
                <a>
                  <IoCloseSharp />
                </a>
                <h2>You can't leave a review until you register</h2>
                <button>Sig up </button>
                <button>Log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
