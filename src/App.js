// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Home from "./Components/Home/Home";
// import Dashboard from "./Components/Dashboard/Dashboard";
// import LocalityWeather from './Components/LocalityWeather/LocalityWeather';
// import { app } from "./Firebaseconfig";
// import { getAuth } from "firebase/auth";

// const ProtectedRoute = ({ children }) => {
//   const auth = getAuth(app);
//   const user = auth.currentUser;
//   return user ? children : <Navigate to="/" />;
// };

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* Protecting the dashboard route */}
//         <Route 
//           path="/dashboard" 
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           } 
//         />
//         {/* Protecting the locality weather route */}
//         <Route 
//           path="/dashboard-locality" 
//           element={
//             <ProtectedRoute>
//               <LocalityWeather />
//             </ProtectedRoute>
//           } 
//         />
//         <Route path="/signin" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import LocalityWeather from './Components/LocalityWeather/LocalityWeather';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-locality" element={<LocalityWeather />} />
        <Route path="/signin" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
