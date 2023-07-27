import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function AdminDashBoard() {

  const [managedata, setManagedata] = useState([])

  useEffect(() => {
    // get user data from local storage
    const storedleaveData = JSON.parse(localStorage.getItem("userleavedata"));
    // console.log(storedleaveData);
    setManagedata(storedleaveData);
  }, [])
  
  // console.log(managedata);
  const handleLeaveApprove = (id) => {
    // const updatedLeaveStatus = managedata.map((ele) => {
      
    //   if (ele.id === id) {
    //     return { ...ele, status: "Approved" };
    //   }
    //   return ele;
    // })
    // setManagedata(updatedLeaveStatus)
    
    // console.log(managedata);
    console.log("hello");
  }

  const handleLeaveRejecet = () => {

  }

  return (
    <>
    <div style={{marginTop:"100px"}}>
      <h1>hello</h1>
    {managedata.map((element,id)=>{
      return <>
      <Box sx={{ marginTop: "100px", width: "200px", border: "1px solid #ccc" }}>
        <Card>
          <CardContent>
            <Typography sx={{ fontSize: 18 }} gutterBottom>
              {element.firstName}
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Leave From {element.leaveDateFrom} to {element.leaveDateFrom}
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Number of Days : (2)
            </Typography>
            <Typography sx={{ fontSize: 18 }} gutterBottom>
              Reason :
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              {element.leaveReason}
            </Typography>
            <Typography sx={{ fontSize: 18 }} gutterBottom>
              Status :
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              {element.status}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant='contained' size="small" onClick={handleLeaveApprove}>Approve</Button>
            <Button variant='contained' size="small" onClick={handleLeaveRejecet}>Reject</Button>
          </CardActions>
        </Card>
      </Box>
      </>
    })}
    </div>
      {/* {managedata.map((element)=>(
      <Box sx={{ marginTop: "100px", width: "200px", border: "1px solid #ccc" }}>
        <Card>
          <CardContent>
            <Typography sx={{ fontSize: 18 }} gutterBottom>
              {element.firstName}
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Leave From (01/01/2023) to (02/01/2023)
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Number of Days : (2)
            </Typography>
            <Typography sx={{ fontSize: 18 }} gutterBottom>
              Reason :
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              (sick Leave)
            </Typography>
            <Typography sx={{ fontSize: 18 }} gutterBottom>
              Status :
            </Typography>

          </CardContent>
          <CardActions>
            <Button variant='contained' size="small" onChange={handleLeaveApprove}>Approve</Button>
            <Button variant='contained' size="small" onChange={handleLeaveRejecet}>Reject</Button>
          </CardActions>
        </Card>
      </Box>
      ))} */}
    </>
  )
}

export default AdminDashBoard