import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function AdminDashBoard() {

  const [managedata, setManagedata] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    // get user data from local storage
    const storedleaveData = JSON.parse(localStorage.getItem("userleavedata"));
    // console.log(storedleaveData);
    setManagedata(storedleaveData);
  }, [toggle])
  
  // console.log(managedata);

  const handleLeaveApprove = (id) => {
    const filterStatus = managedata.filter((res)=>res.id !==id)
    console.log(filterStatus);
    // console.log(id);
    const other = managedata.find((item)=>{
      return(
        item.id===id
      )
    })
    console.log(other);
    localStorage.setItem("userleavedata",JSON.stringify([...filterStatus,{...other,status:"Approved"}]))
    setToggle(true)
  }
  const handleLeaveRejecet = () => {

  }

  const calculateDate =()=>{
    
  }

  return (
    <>
    <div style={{marginTop:"100px"}}>
      <h1>hello</h1>
    {managedata.map((element)=>{
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
            <Button variant='contained' size="small" onClick={()=>handleLeaveApprove(element.id)}>Approve</Button>
            <Button variant='contained' size="small" onClick={()=>handleLeaveRejecet(element.id)}>Reject</Button>
          </CardActions>
        </Card>
      </Box>
      </>
    })}
    </div>
    </>
  )
}

export default AdminDashBoard