// 
// import React from 'react';
// import { Link } from 'react-router-dom';

// export const Logout = () => {
//   return (
//     <div className="logout-screen" style={{background: 'linear-gradient(to bottom, #9b59b6, #3498db)'}}>
//       <div className="container d-flex flex-column align-items-center text-white h-100">
//         <h1 className="mb-5">Sozial</h1>
//         <h3>You have successfully logged out.</h3>
//         <Link to="/signup">
//           <button className="btn btn-primary mt-5" style={{background: 'linear-gradient(to bottom, #9b59b6, #3498db)', border: 'none'}}>Login Again</button>
//         </Link>
//       </div>
//     </div>
//   );
// };
import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/index.css"

export const Logout = () => {
    return (
        <div className="logout-container d-flex justify-content-center align-items-center">
        <div className="logout-box text-center">
        <h3 className="mb-4">Are you sure you want to log out?</h3>
        <div className="d-flex justify-content-around w-100">
        <Link to={-1}>
        <button className="btn btn-lilac mr-3">No</button>
        </Link>
        <Link to="/">
        <button className="btn btn-deep-blue">Yes</button>
        </Link>
        </div>
        </div>
        </div>
        );
        };




