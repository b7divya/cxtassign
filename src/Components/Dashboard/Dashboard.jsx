// import React from 'react'

// const Dashboard = () => {
//   return (
//     <div className='dashboard'>
//       <div className='dashboard-container'>
//         <div className='dashboard-container-top'>
//           <div className='dashboard-container-top-search'>

//           </div>
//         </div>
//         <div className='dashboard-container-center'>
//           <div className='dashboard-container-center-left'>

//           </div>
//           <div className='dashboard-container-center-right'>
            
//           </div>
//         </div>
//         <div className='dashboard-container-bottom'>
//           <div className='dashboard-container-bottom-left'>

//           </div>
//           <div className='dashboard-container-bottom-right'>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dashboard



import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {/* Top Section */}
        <div className="dashboard-container-top">
          <input
            type="text"
            placeholder="Search for your preferred city..."
            className="search-bar"
          />
        </div>

        {/* Center Section */}
        <div className="dashboard-container-center">
          <div className="dashboard-container-center-left"></div>
          <div className="dashboard-container-center-right"></div>
        </div>

        {/* Bottom Section */}
        <div className="dashboard-container-bottom">
          <div className="dashboard-container-bottom-left"></div>
          <div className="dashboard-container-bottom-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

