import { Button, Typography, Card, CardContent, CardActions, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function EmployeeDashboard() {

  const navigate = useNavigate()

  const [receivedData, setReceivedData] = useState([])

  useEffect(() => {
    // get user data from local storage
    const storedleaveData = JSON.parse(localStorage.getItem("userleavedata"));
    // console.log(storedleaveData);
    // setReceivedData([...receivedData, storedleaveData]);
    // console.log(managedata);
    // console.log(storedleaveData);
    if (storedleaveData && storedleaveData.length > 0) {
      setReceivedData(storedleaveData)
    }
  }, [])

  // console.log(receivedData);

  const totalLeavess =  receivedData.length;
  // console.log(totalLeavess);

  const pendingLeaves =receivedData.filter((el) => {
    return el.status == "pending"
  }) 
  const pendingLeavess=pendingLeaves.length;
  // console.log(pendingLeavess);

  const approvedLeaves =receivedData.filter((el) => {
    return el.status == "approved"
  }) 
  const approvedLeavess=approvedLeaves.length;
  // console.log(approvedLeavess);

  const rejectedLeaves =receivedData.filter((el) => {
    return el.status == "rejected"
  }) 
  const rejectedLeavess=rejectedLeaves.length;
  // console.log(rejectedLeavess);
  // const totalLeaves = () => {
  //   const userLogin = receivedData.filter((el) => {
  //     return el.status == "approved"
  //   })
  //   console.log(userLogin);
  // }
  // const approvedLeaves= userLogin.length;

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/applyLeave")
  }

  return (
    <>
      <Typography sx={{ marginTop: "100px" }}>Total Leaves : {totalLeavess}</Typography>
      <Typography>Pending Leaves : {pendingLeavess}</Typography>
      <Typography>Approved Leaves : {approvedLeavess}</Typography>
      <Typography>Rejected Leaves : {rejectedLeavess}</Typography>
      {/* //on click of this button divert to the Apply leave page */}
      <Button variant='contained' onClick={handleClick} sx={{ mt: 2 }}>Add Leave</Button>
      {receivedData.map((ele, index) => {
        console.log(ele.leaveDateFrom);
        return <>
          {/* <ul key={index}>
            <li>{ele.leaveReason}</li>
          </ul> */}
          <Box key={index} sx={{ marginTop: "50px", width: "200px", border: "1px solid #ccc" }}>
            <Card>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  Leave From {ele.leaveDateFrom} to {ele.leaveDateFrom}
                </Typography>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  Number of Days : (2)
                </Typography>
                <Typography sx={{ fontSize: 18 }} gutterBottom>
                  Reason :
                </Typography>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  {ele.leaveReason}
                </Typography>
                <Typography sx={{ fontSize: 18 }} gutterBottom>
                  Status :
                </Typography>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  {ele.status}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </>
      })}


      {/* {managedata.map((element, id) => {
        console.log(element);
        console.log(element.leaveDateFrom);
        return <>

          <Box key={id} sx={{ marginTop: "50px", width: "200px", border: "1px solid #ccc" }}>
            <Card>
              <CardContent>
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
            </Card>
          </Box>
        </>
      })} */}

    </>
  )
}

export default EmployeeDashboard