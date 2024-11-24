
import React, { useState } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../Firebaseconfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Home = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    number: "",
  });
  const [isSignIn, setIsSignIn] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleToggle = (formType) => {
    setIsSignIn(formType);
    setErrorMessage("");
    setSubmitted(false);
    setFormData({
      email: "",
      password: "",
      name: "",
      number: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const auth = getAuth(app);
    const { email, password, name, number } = formData;

    if (!email || !password) {
      setErrorMessage("Email and password are required!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!isSignIn) {
      if (!name || !number) {
        setErrorMessage("Please fill in all fields for Sign Up.");
        return;
      }

      if (!/^\d+$/.test(number)) {
        setErrorMessage("Please enter a valid mobile number.");
        return;
      }
    }

    try {
      if (isSignIn) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Sign In successful");
        navigate("/dashboard");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("Sign Up successful");
        navigate("/signin");
      }
      setSubmitted(true);
    } catch (error) {
      console.error("Error during authentication:", error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-header">
          <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
          <p>Welcome to the Weather App</p>
        </div>
        <div className="toggle-buttons">
          <button
            onClick={() => handleToggle(true)}
            className={`toggle-button ${isSignIn ? "active" : ""}`}
          >
            Sign In
          </button>
          <button
            onClick={() => handleToggle(false)}
            className={`toggle-button ${!isSignIn ? "active" : ""}`}
          >
            Sign Up
          </button>
        </div>
        <div className="form-container">
          {!isSignIn && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="text"
                name="number"
                placeholder="Mobile Number"
                value={formData.number}
                onChange={handleChange}
                className="input-field"
              />
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
          />
          <button className="submit-button" onClick={handleSubmit}>
            {submitted ? "Submitted" : "Submit"}
          </button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
        <Link to="/dashboard">
          <button className="guest-button">Login as Guest</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;



