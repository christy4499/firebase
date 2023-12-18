import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    

    <>

    <div style={{width:'100%',backgroundColor:'blue', }}>
<div style={{marginBottom:'200px'}}>

   <Row>
      <Col lg={6}>
         <h1 style={{marginTop:'100px', color:'white', marginLeft:'120px'}} className='fw-bolder '>Make your app the <br />
best it can be</h1>
<p className='mt-5' style={{marginLeft:'120px',color:'white', fontSize:'20px'}}>Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.</p>
<div className=' ' style={{marginLeft:'120px'}}>
           <Button variant="primary" size="lg" active>
           Primary button
         </Button>
        </div>
      </Col>
      <Col lg={6}>
<img className='' style={{marginTop:'100px',  marginLeft:'60px'}} width={'500px'} height={'400px'} src="https://media3.giphy.com/media/BHNfhgU63qrks/giphy.gif?cid=ecf05e47pl7mem2643hj8sesa5or5f9m1ni01mqdawf8m879&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />

      </Col>
   </Row>
</div>

<div  className='container rounded  mt-5' style={{backgroundColor:'white'}}>
<Row >
 <Col sm={12} md={6}>
    <p className='mt-5' style={{fontSize:'40px'}}>Common use cases</p>
    <p >Use Firebase products together to solve complex challenges and optimize your app experience. Personalize your onboarding flow, grow user engagement, or add new functionality with Firebase</p>
    <button style={{width:'190px'}} className='btn btn-primary rounded mt-5'>view solutions</button>
 </Col>
 <Col sm={12} md={6}>
    <img style={{height:'350px'}} className='ms-5' src="https://imgs.search.brave.com/l9Y6rUpuXayWtmtEAQpDm5GPkdqnWgWoLzy_Ofcn2VU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pb25p/Y3RoZW1lcy5jb20v/YXNzZXRzL2ltYWdl/cy9pY29ucy9naXJs/LW5ld3NsZXR0ZXIu/c3Zn.svg" alt="" />
 </Col>
</Row>
</div>

  


<div  className='container rounded  mt-5' style={{backgroundColor:'white'}}>
<Row >
 <Col sm={12} md={6}>
    <p className='mt-5' style={{fontSize:'40px'}}>Common use cases</p>
    <p >Use Firebase products together to solve complex challenges and optimize your app experience. Personalize your onboarding flow, grow user engagement, or add new functionality with Firebase</p>
    <button style={{width:'190px'}} className='btn btn-primary rounded mt-5'>view solutions</button>
 </Col>
 <Col sm={12} md={6}>
    <img style={{height:'350px'}} className='ms-5' src="https://imgs.search.brave.com/l9Y6rUpuXayWtmtEAQpDm5GPkdqnWgWoLzy_Ofcn2VU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pb25p/Y3RoZW1lcy5jb20v/YXNzZXRzL2ltYWdl/cy9pY29ucy9naXJs/LW5ld3NsZXR0ZXIu/c3Zn.svg" alt="" />
 </Col>
</Row>
</div>



<div  className='container rounded  mt-5 ' style={{backgroundColor:'white', height:'400px'}}>
<Row >
 <Col lg={2}>
   
 </Col>
 <Col  lg={8}>
    <div><img style={{height:'300px'}} className=' w-100 mt-5 ' src="https://imgs.search.brave.com/aYTK-bzniF3LG9eVbJoEy3jVtNM3qRZT_Vp8ipFGwN0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzI1LzA4LzQ5/LzM2MF9GXzIyNTA4/NDk2Nl9oaHN3a2s5/R2drQUtjcjJwMW42/OWFhaUkxakVUYlpP/OS5qcGc" alt="" /></div>
 </Col>
 <Col lg={2}>
   
 </Col>
</Row>
</div>




<div  className='container rounded  mt-5 ' style={{backgroundColor:'white', height:'400px'}}>
<Row >
 <Col lg={2}>
   
 </Col>
 <Col  lg={8}>
    <div><img style={{height:'300px'}} className=' w-100 mt-5 ' src="https://imgs.search.brave.com/aYTK-bzniF3LG9eVbJoEy3jVtNM3qRZT_Vp8ipFGwN0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzI1LzA4LzQ5/LzM2MF9GXzIyNTA4/NDk2Nl9oaHN3a2s5/R2drQUtjcjJwMW42/OWFhaUkxakVUYlpP/OS5qcGc" alt="" /></div>
 </Col>
 <Col lg={2}>
   
 </Col>
</Row>
</div>

<div  className='container rounded  mt-5' style={{backgroundColor:'white', height:'600px'}}>
<Row >

   <div className='d-flex justify-content-center align-items-center flex-column'>
      <h2>Integrations</h2>
      <h4 className='text-center'>Easily integrate firebase withyour teams favorite tools</h4>
   </div>
 <Row lg={12} sm={6} className='mt-5' >
 
   
   
          <img  style={{height:"50px"}}  src="	https://firebase.google.com/static/images/integrations/ad-mob.svg" alt="" />
          <img style={{height:"50px"}} src="	https://firebase.google.com/static/images/integrations/ad-mob.svg" alt="" />
          <img style={{height:"50px"}} src="		https://firebase.google.com/static/images/integrations/slack.png
         " alt="" />
        <img style={{height:"50px"}} src="	https://firebase.google.com/static/images/integrations/ad-mob.svg" alt="" />
         <img style={{height:"50px"}} src="	https://firebase.google.com/static/images/integrations/ad-mob.svg" alt="" />
         
        <img style={{height:"50px"}} src="	https://firebase.google.com/static/images/integrations/ad-mob.svg" alt="" />
       
      
 <div className='mt-5 mx-auto'>
         <Button variant="primary" size="lg" active>
           Primary button
         </Button>
 </div>
 </Row>
</Row>
</div>


<div>
   <Row>
      <Col lg={4}></Col>
      <Col lg={4}>
        <div className='d-flex justify-content-center align-items-center ' style={{marginTop:'130px' }}> <img width={'80px'} height={'120px'}  src="https://imgs.search.brave.com/zjCOJVhK5K9z4lUN_jcgA-7rZ6s8blL7K_1NAXq4p3Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3ZjQwZWNlZjEw/MTRjMGI1ZTQ4OGEu/cG5n" alt="" />
        
        </div>
        <h1 className='text-center fs-1 fw-bolder' style={{color:'white'}}>Try Firebase today</h1>
        <p className='text-center' style={{fontSize:'20px' ,color:'white'}}>Integrating it into your app is easy.</p>
        <div className='d-flex justify-content-center align-items-center ' style={{marginBottom:'180px'}}>
           <Button variant="primary" size="lg" active>
           Primary button
         </Button>
        </div>
      </Col>
      <Col lg={4}></Col>
   </Row>
</div>



    </div>
      </>


  )
}

export default Home



/* 
https://www.gstatic.com/devrel-devsite/prod/va65162e8ce9aacc75e4d3c0cd6d166fc6ceaaf184fea0ff0eac1d9b62c0480be/firebase/images/lockup-dark-theme.svg */