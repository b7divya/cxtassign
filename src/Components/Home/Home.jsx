// import React, { useState } from 'react';
// import './Home.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { app } from '../../Firebaseconfig';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// // import {  signInWithEmailAndPassword } from 'firebase/auth';

// const Home = () => {
//     const [isSignIn, setIsSignIn] = useState(true);
//     const [email, setEmail] = useState(""); // Added email state
//     const [password, setPassword] = useState(""); // Added password state
//     const [name, setName] = useState('');
//     const [number, setNumber] = useState('');
//     const [submitted, setSubmitted] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');
//     const navigate = useNavigate ()
  
//     const handleToggle = (formType) => {
//       setIsSignIn(formType);
//       setErrorMessage('');
//       setSubmitted(false);
//     };
  
//     const handleSubmit = () => {
//         const auth = getAuth (app)
//         createUserWithEmailAndPassword (auth,email,password)
//         signInWithEmailAndPassword(auth,email,password)

//       if (isSignIn) {
//         console.log("Sign In submitted");
//         navigate ('/dashboard')
//       } else {
//         console.log("Sign Up submitted");
//         navigate ('/signin')
//       }
//       setSubmitted(true);
//     };

//     const handleSubmit = async () => {
//         const auth = getAuth(app);
      
//         // Validate inputs
//         if (!email || !password) {
//           setErrorMessage("Email and password are required!");
//           return;
//         }
      
//         if (!/\S+@\S+\.\S+/.test(email)) {
//           setErrorMessage("Please enter a valid email address.");
//           return;
//         }
      
//         try {
//           if (isSignIn) {
//             // Sign In
//             await signInWithEmailAndPassword(auth, email, password);
//             console.log("Sign In successful");
//             navigate("/dashboard");
//           } else {
//             // Sign Up
//             await createUserWithEmailAndPassword(auth, email, password);
//             console.log("Sign Up successful");
//             navigate("/signin");
//           }
//           setSubmitted(true);
//         } catch (error) {
//           console.error("Error during authentication:", error.message);
//           setErrorMessage(error.message);
//         }
//       };
      

//   return (
//     <div className='home'>
//         <div className='home-container'>
//             <div className='home-container-top'>
//                 <div className='home-container-top-left'>
//                     <h4>Welcome to the Weather App</h4>
//                 </div>
//                 <div className='home-container-top-right'>

//                 </div>
//             </div>
//             <div className='home-container-bottom'>
//                 <div className='home-container-bottom-left'>
//                 </div>
//                 <div className='home-container-bottom-right'>
//                     <div className='home-container-bottom-right-top'>
//                         {/* <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2> */}
//                         <div className="toggle-buttons">
//                             <button 
//                                 onClick={() => handleToggle(true)} 
//                                 className={`toggle-button ${isSignIn ? 'active' : ''}`}
//                             >
//                                 Sign In
//                             </button>
//                             <button 
//                                 onClick={() => handleToggle(false)} 
//                                 className={`toggle-button ${!isSignIn ? 'active' : ''}`}
//                             >
//                                 Sign Up
//                             </button>
//                         </div>
//                     </div>
//                     <div className='home-container-bottom-right-center'>
//                     {isSignIn ? (
//                         <div className="signin">
//                             <input
//                                 type="text"
//                                 placeholder="Email Address"
//                                 className="add"
//                             />
//                             <input
//                                 type="password"
//                                 placeholder="Password"
//                                 className="add"
//                             />
//                             <button
//                                 className="signin-button"
//                                 onClick={handleSubmit}
//                             >
//                                 {submitted ? "Submitted" : "Submit"}
//                             </button>
//                         </div>
//                     ) : (
//                         <div className="signup">
//                             <input
//                                 type="text"
//                                 placeholder="Enter Full Name"
//                                 className="name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Enter Mobile Number"
//                                 className="number"
//                                 value={number}
//                                 onChange={(e) => setNumber(e.target.value)}
//                             />
//                             <input
//                                 type="email"
//                                 placeholder="Email Address"
//                                 className="add"
//                             />
//                             <button
//                                 className="signup-button"
//                                 onClick={handleSubmit}
//                             >
//                                 {submitted ? "Submitted" : "Submit"}
//                             </button>
//                         </div>
//                     )}
//                     {errorMessage && (
//                         <div className="error-message">{errorMessage}</div>
//                     )}
//                     </div>
//                     <div className='home-container-bottom-right-bottom'>
//                         <Link to='/dashboard'>
//                             <button className="guest-button">Login as Guest</button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default Home;




import React, { useState } from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../../Firebaseconfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Home = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleToggle = (formType) => {
    setIsSignIn(formType);
    setErrorMessage('');
    setSubmitted(false);
  };

  const handleSubmit = async () => {
    const auth = getAuth(app);

    if (!email || !password) {
      setErrorMessage('Email and password are required!');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      if (isSignIn) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('Sign In successful');
        navigate('/dashboard');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('Sign Up successful');
        navigate('/signin');
      }
      setSubmitted(true);
    } catch (error) {
      console.error('Error during authentication:', error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-container-top">
          <h4>Welcome to the Weather App</h4>
        </div>
        <div className="home-container-bottom">
          <div className="home-container-bottom-right">
            <div className="toggle-buttons">
              <button
                onClick={() => handleToggle(true)}
                className={`toggle-button ${isSignIn ? 'active' : ''}`}
              >
                Sign In
              </button>
              <button
                onClick={() => handleToggle(false)}
                className={`toggle-button ${!isSignIn ? 'active' : ''}`}
              >
                Sign Up
              </button>
            </div>
            <div className="form-container">
              {isSignIn ? (
                <div className="signin">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="add"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="add"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="signin-button" onClick={handleSubmit}>
                    {submitted ? 'Submitted' : 'Submit'}
                  </button>
                </div>
              ) : (
                <div className="signup">
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    className="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Enter Mobile Number"
                    className="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="add"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="add"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="signup-button" onClick={handleSubmit}>
                    {submitted ? 'Submitted' : 'Submit'}
                  </button>
                </div>
              )}
              {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>
            <Link to="/dashboard">
              <button className="guest-button">Login as Guest</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
