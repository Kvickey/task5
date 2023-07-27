import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {

  const [formData, setFormData] = useState({
    radio:"hod",
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    department: "",
    userName: "",
    password: ""
  })

  const [data, setData] = useState([])

  const handleChange = (e) => {
    // const {firstName,lastName,email,contact,deapartment,userName,password}=e.target;
    setFormData((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }
  // console.log(formData);

  const handleSwitch = (e) => {
    e.preventDefault();
    setData([...data, formData])
    localStorage.setItem("userdata", JSON.stringify([...data, formData]))
    setFormData({
      radio:"hod",
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      department: "",
      userName: "",
      password: ""
    })
  }
  // console.log(data);

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
          <Typography textAlign="center" color="primary" variant='h4'> Register </Typography>
          <FormControl>
            {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
            <RadioGroup
              row
            >
              <FormControlLabel value="hod" name='radio' onChange={handleChange} control={<Radio />} label="Hod" />
              <FormControlLabel value="staff" name='radio' onChange={handleChange} control={<Radio />} label="Staff" />
            </RadioGroup>
          </FormControl>
          <TextField variant='outlined' value={formData.firstName} onChange={handleChange} margin='normal' name='firstName' placeholder='Enter First Name' type='text' />
          <TextField variant='outlined' value={formData.lastName} onChange={handleChange} margin='normal' name='lastName' placeholder='Enter Last Name' type='text' />
          <TextField variant='outlined' value={formData.email} onChange={handleChange} margin='normal' name='email' placeholder='Enter Email' type='email' />
          <TextField variant='outlined' value={formData.contact} onChange={handleChange} margin='normal' name='contact' placeholder='Enter Contact' type='number' />
          <TextField variant='outlined' value={formData.department} onChange={handleChange} margin='normal' name='department' placeholder='Enter Department' type='text' />
          <TextField variant='outlined' value={formData.userName} onChange={handleChange} margin='normal' name='userName' placeholder='Enter Username' type='text' />
          <TextField variant='outlined' value={formData.password} onChange={handleChange} margin='normal' name='password' placeholder='Enter Password' type='password' />
          <Button variant='contained' sx={{ mt: 2 }} onClick={handleSwitch}>SignUp</Button>
          <Typography textAlign="center" sx={{marginTop:"20px"}} variant='p'>Already Have Account <span><Link to={"/login"} >Login</Link></span></Typography>
        </Box>
      </form>
    </>
  )
}

export default Register