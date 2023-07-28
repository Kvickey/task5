import { Button, FormControl, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

function ApplyLeave() {

  // const [leaveDateFrom, setLeaveDateFrom] = useState('')
  // const [leaveDateTo, setLeaveDateTo] = useState('')
  // const [leaveReason, setLeaveReason] = useState('')
  const [formData, setFormData] = useState({
    leaveDateFrom: "",
    leaveDateTo: "",
    leaveReason:"",
    status:"pending"
  })

  const [applyLeaveData, setApplyLeaveData] = useState([])

  const [toggle, setToggle] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    // get user data from local storage
      const leaveData = JSON.parse(localStorage.getItem("userleavedata"))||[];
    // console.log(leaveData);
      // if (leaveData) {
      //   setApplyLeaveData(JSON.parse(leaveData));
      // }
      setApplyLeaveData(leaveData)
  }, [toggle])

  

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev, [e.target.name]: e.target.value
  }))
  }
    // console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setApplyLeaveData([...applyLeaveData, formData])
    localStorage.setItem("userleavedata", JSON.stringify([...applyLeaveData,{...formData, id: uuidv4()}]))
    navigate("/employeeDashboard")
    setToggle(!toggle)
    setFormData({
      leaveDateFrom: "",
      leaveDateTo: "",
      leaveReason:""
    })
  }
  // console.log(applyLeaveData);

  return (
    <div style={{ marginTop: "100px", maxWidth: "500px" }}>
      <Typography sx={{ marginTop: "20px" }}>Leave Details</Typography>
      <FormControl fullWidth sx={{ marginBottom: 3, marginTop: "20px" }}>
        <TextField
          // label="Date From"
          type="date"
          name='leaveDateFrom'
          value={formData.leaveDateFrom}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true
          }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 3 }}>
        <TextField
          label="Date To"
          type="date"
          name='leaveDateTo'
          value={formData.leaveDateTo}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true
          }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 3 }}>
        <TextField
          label="Leave Reason"
          name='leaveReason'
          value={formData.leaveReason}
          onChange={handleChange}
        />
      </FormControl>
      <Button variant='contained' sx={{ margin: "10px 0px 0px 10px" }}>Cancel</Button>
      <Button variant='contained' sx={{ margin: "10px 0px 0px 10px" }} onClick={handleSubmit}>Submit</Button>
    </div>
  )
}

export default ApplyLeave