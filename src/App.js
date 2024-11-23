// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Components/Home/Home';
// import Dashboard from './Components/Dashboard/Dashboard';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />}/>
//         <Route path='/dashboard' element={<Dashboard />}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
// import App from './App';
// import NotFound from './NotFound';  // Import your NotFound component for 404 handling
// import reportWebVitals from './reportWebVitals';

// // Create the router with the future flags enabled
// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <App />, 
//     },
//     {
//       path: "*", 
//       element: <NotFound />, // Route for unknown paths (404)
//     },
//   ],
//   {
//     future: {
//       v7_startTransition: true,  // Opt-in to React.startTransition behavior for state updates
//       // Other flags (optional):
//       v7_relativeSplatPath: true, 
//       v7_fetcherPersist: true, 
//       v7_normalizeFormMethod: true,
//       v7_partialHydration: true,
//       v7_skipActionErrorRevalidation: true,
//     },
//   }
// );

// // Set up RouterProvider with the configured router
// const Root = () => <RouterProvider router={router} />;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Root />  {/* Wrapping RouterProvider inside Root */}
//   </React.StrictMode>
// );




import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import NotFound from './NotFound';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />, // Home component at the root path
    },
    {
      path: "/dashboard",
      element: <Dashboard />, // Dashboard component at '/dashboard' path
    },
    {
      path: "*", // Catch-all route for undefined paths
      element: <NotFound />,  // Show NotFound component for unknown routes
    },
  ],
  {
    future: {
      v7_startTransition: true,  // Opt-in to React.startTransition behavior for state updates
      v7_relativeSplatPath: true,  // Enable relative splat path behavior in v7
      v7_fetcherPersist: true,  // Enable persistence behavior for fetchers
      v7_normalizeFormMethod: true,  // Normalize formMethod fields to uppercase in v7
      v7_partialHydration: true,  // Enable partial hydration behavior in v7
      v7_skipActionErrorRevalidation: true,  // Skip action error revalidation behavior in v7
    },
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
