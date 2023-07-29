import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userName: "",
        password: ""
    })

    const handleChange = (e) => {
        // const {firstName,lastName,email,contact,deapartment,userName,password}=e.target;
        setFormData((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }
    // console.log(formData);
    const handleSwitch = (e) => {
        e.preventDefault();
        const getUserData = localStorage.getItem("userdata")
        // console.log(getUserData);

        const { userName, password } = formData
        if (getUserData && getUserData.length) {
            const newdata = JSON.parse(getUserData);
            // if(radio?staff)
            console.log(newdata);
            const userLogin = newdata.find((el, key) => {
                return el.userName === userName && el.password === password
            });
            // console.log(userLogin.firstName);
            // console.log(userLogin);
            if (userLogin.length === 0) {
                alert("Please Enter Valid Details")
            } else {
                // alert("User Login Successful")
                localStorage.setItem("user_login", JSON.stringify(userLogin));
                // navigate("/employeeDashboard")
                // {el.radio===staff?navigate("/employeeDashboard"):navigate("/adminDashboard")}
                // console.log("Login Sucessful");
            }


        }
        setFormData({
            userName: "",
            password: ""
        })
    }

    return (
        <>
            <form>
                <Box
                    borderRadius="25px"
                    border={"0.25px solid #ccc"}
                    padding={"60px"}
                    display={"flex"}
                    maxWidth={"450px"}
                    flexDirection={"column"}
                    margin={"100px auto"}
                    boxShadow={"5px 5px 10px #ccc"}
                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc"
                        }
                    }}
                >
                    <Typography textAlign="center" color="primary" variant='h4'>Login</Typography>
                    <TextField variant='outlined' value={formData.userName} onChange={handleChange} margin='normal' name='userName' placeholder='Enter Usename' type='text' />
                    <TextField variant='outlined' value={formData.password} onChange={handleChange} margin='normal' name='password' placeholder='Enter Password' type='password' />
                    <Button variant='contained' sx={{ mt: 2 }} onClick={handleSwitch}>Login</Button>
                    <Typography textAlign="center" sx={{marginTop:"20px"}} variant='p'>Not Registered Yet <span><Link to={"/register"} >Register</Link></span></Typography>
                </Box>
            </form>
        </>
    )
}

export default Login