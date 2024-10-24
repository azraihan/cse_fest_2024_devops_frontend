import React, { useState } from "react";

//MUI
import {
  Box,
  TextField,
  Button,
  Tab,
  Tabs,
  Typography,
  Container,
} from "@mui/material";

//dummy user
const user = {
  name: "",
  email: "",
  contact: "",
  password: "",
};


const LoginRegister = ({setAuth}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
    // Implement login logic here
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", registerData);
    // Implement registration logic here
  };

  // login api
const handleLoginClick = async () => {
    try {
    //   const res = await fetch(``, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       //'token': localStorage.token
    //     },
    //     body: JSON.stringify({
    //       email: loginData.email,
    //       password: loginData.password,
    //     }),
    //   });
  
    //   const parseRes = await res.json();
  
      //if (res.ok) {
        //console.log(parseRes);
        setAuth(true);
      //}
    } catch (err) {
      console.error("Error fetching user details", err.message);
    } finally {
    }
  };

// login api
const handleRegisterClick = async () => {
    try {
    //   const res = await fetch(``, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       //'token': localStorage.token
    //     },
    //     body: JSON.stringify({
    //       name: loginData.name,
    //       email: loginData.email,
    //       contact_details: loginData.contact,
    //       password: loginData.password,
    //     }),
    //   });
  
    //   const parseRes = await res.json();
  
      //if (res.ok) {
        //console.log(parseRes);
        setAuth(true);
      //}
    } catch (err) {
      console.error("Error fetching user details", err.message);
    } finally {
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>

        {activeTab === 0 && (
          <Box component="form" onSubmit={handleLoginSubmit} sx={{ mt: 2 }}>
            <Typography variant="h5">Login</Typography>
            {/* <TextField
              label="Name"
              name="name"
              value={loginData.name}
              onChange={handleLoginChange}
              fullWidth
              margin="normal"
              required
            /> */}
            <TextField
              label="Email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              fullWidth
              margin="normal"
              required
            />
            {/* <TextField
              label="Contact"
              name="contact"
              value={loginData.contact}
              onChange={handleLoginChange}
              fullWidth
              margin="normal"
              required
            /> */}
            <TextField
              label="Password"
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              fullWidth
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleLoginClick}
            >
              Login
            </Button>
          </Box>
        )}

        {activeTab === 1 && (
          <Box component="form" onSubmit={handleRegisterSubmit} sx={{ mt: 2 }}>
            <Typography variant="h5">Register</Typography>
            <TextField
              label="Name"
              name="name"
              value={registerData.name}
              onChange={handleRegisterChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              name="email"
              value={registerData.email}
              onChange={handleRegisterChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Contact"
              name="contact"
              value={registerData.contact}
              onChange={handleRegisterChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={registerData.password}
              onChange={handleRegisterChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={handleRegisterChange}
              fullWidth
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleRegisterClick}
            >
              Register
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default LoginRegister;
