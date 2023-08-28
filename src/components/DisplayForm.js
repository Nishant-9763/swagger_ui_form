import { useState } from "react"
import React  from 'react'
// import "./Create.css"
// import Spinner from 'react-bootstrap/Spinner';
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// import {successToast,errorToast} from '../alert'




const DisplayForm = () => {

//   let navigate = useNavigate()
  
  const [firstname,setFirstname] = useState('')
//   const [number_of_images,setNumber] = useState(0)
  const [middleName,setMiddleName]  = useState("")
  const [lastName,setLastName]  = useState("")
  const [emailId,setEmailId]  = useState("")
  const [currentJob,setCurrentJob]  = useState("")

//   const [nishnat,setNishnat] = useState([])
//   const [loading,setLoading] = useState(false)
  
//   const token = localStorage.getItem("newKey")

//   if(!token){
//     navigate('/')
//     // errorToast("please login first")
  
//   }


    const createKaro = function (event) {
    //   setLoading(true)
      event.preventDefault()
    console.log("test",event);
     alert(event);
    //   axios.post(process.env.REACT_APP_CREATE_API,{prompt,number_of_images,size}, {'headers': {'Authorization': 'Bearer ' + token}})
    //     .then((res) => {
          
    //         // console.log(res.data.data)
    //         successToast("Ai generate images")
    //         (res.data.data.imageUrl)
    //       setLoading(false)
    //     })
    //     .catch((error) => {
    //       setLoading(false)
    //       errorToast(error.response.data.message + " Error")
    //     })
    }
   
  

  return (
    <div className='divn'>
       <form onSubmit={createKaro}  className="form">
            <p className="h1">Candidate Details</p>
            <input className="prompt" value={firstname} type="text" placeholder='First Name' onChange={((e)=>setFirstname(e.target.value))} required /> <br/><br/>
            <input className="prompt" value={middleName} type="text" placeholder='Middle Name' onChange={((e)=>setMiddleName(e.target.value))} required /> <br/><br/>
            <input className="prompt" value={lastName} type="text" placeholder='Last Name' onChange={((e)=>setLastName(e.target.value))} required /> <br/><br/>
            <input className="prompt" value={emailId} type="text" placeholder='Email Id' onChange={((e)=>setEmailId(e.target.value))}required /> <br/><br/>
            <input className="prompt" value={currentJob} type="text" placeholder='Current Job' onChange={((e)=>setCurrentJob(e.target.value))}required /> <br/><br/>

            <button className="battan" type="submit"  >SUBMIT</button>

            {/* {loading ? "":(<input className="battan" type="submit" placeholder="Generate" />)}
            {loading ? <div><Spinner className="spin" animation="border" variant="info" /> </div>: ""  }   <br /> */}

        </form>
        <div id="createImg">
        <table>
            <tr>
                <th>First Name</th>
                <th>Middle name</th>
                <th>Last Name</th>
                <th>Email Id</th>
                <th>Current Job</th>
            </tr>
            <tr>
                <td>{firstname}</td>
                <td>{middleName}</td>
                <td>{lastName}</td>
                <td>{emailId}</td>
                <td>{currentJob}</td>

            </tr>
        </table>
          
        </div>
        {/* <span>
            {firstname}
            {middleName}
            {lastName}
            {emailId}
            {currentJob}
        </span> */}
    </div>
  )
            
}


export default DisplayForm



































































// import React, { useEffect, useState } from "react";
// // import "./homePage.css";
// // import Button from "react-bootstrap/Button";
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import axios from "axios";
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// // import Main from "../main/Main";


// const Create = () => {

//   const navigate = useNavigate()

//     const [userData,setUserData] = useState([])
//     const [prompt,setPrompt] = useState('')

//     const token = localStorage.getItem("group2project-5")

//     // if(!token){
//     //   alert("please login first")
    
//     //   navigate('/')
//     // }

//  const createUser = async function  (){ 
//     alert("joi")

// //    await  axios.post(`http://localhost:8080/createImage` , {prompt}, {'headers': {'Authorization': 'Bearer ' + token}} )
     
// //      .then((res)=>{
// //     //    if(res.data.data.length==0) return (<h1>  Images not created Yet</h1>)
// //     //    if(res.data.data.length == 0) {console.log("no data present");}
// //     console.log(res.data);
// //        setUserData(res.data.data)  
// //      }).catch((error)=>{
// //       alert( error.response.data.message + " Error")
// //       }) 

//     }



//     // useEffect(()=>{

//     // createUser()
      
//     // },[])
  
// // function deleteImage(id){
// //   alert(" Image deleted ")
// //   axios.delete(`http://localhost:3001/image/deleteImage/${userId}/${id}`, {'headers': {'Authorization': 'Bearer ' + token}})
// //   .then((res)=>{
// //     if(res.length===0)return (alert("No Images created , Please create Image by clicking ob button"))
// //     getUser()
// //   })
// // }

// // const routeChange = () =>{ 
// //   let path = `/image/generateImage/${userId}`; 
// //   navigate(path);
// // }

//   return (
//     <div >
//       <section onSubmit={createUser}>
//             <p className="h1">Descibe Your Text</p>
//             <input className="prompt" type="text" placeholder='Enter text' onChange={((e)=>setPrompt(e.target.value))} /> <br/>
//             <Button  type="submit" > Generate</Button>
//             </section>
//       {/* <Container>
//       <Row className="my-4">
//         <Col>
//         </Col>
//       </Row>
//       <Row className="my-4">
//         {userData.map(book => (
//           <Col md={4} key={book._id}>
            
//             <Card className="card">
//               <Card.Img variant="top" src={book.imageUrl} />
//             </Card>
//           </Col>
//         ))}
//       </Row> 
//     </Container> */}
  
     
//     </div>
//   );
// };

// export default Create;