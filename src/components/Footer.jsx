import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './Foot.css'
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <>
      
          <div  style={{backgroundColor:'ButtonFace'}} >
            <Row>
               <Col lg={4} >
                <div className='ms-4'>
                  <p className='' style={{fontSize:'18px'}}>Learn</p>
                  <p className='' style={{fontSize:'14px'}}>Guides</p>
                  <p className='' style={{fontSize:'14px'}} >Reference</p>
                  <p className='' style={{fontSize:'14px'}} >Samples</p>
                  <p className='' style={{fontSize:'14px'}} >Libraries</p>
                  <p className='' style={{fontSize:'14px'}} >GitHub</p>
                </div>
               </Col>
               <Col sm={12} md={6} lg={4} xl={3}>
               <div className='ms-4'>
                  <p className='' style={{fontSize:'18px'}}>Stay connected</p>
                  <p className='' style={{fontSize:'14px'}}>Blog</p>
                  <p className='' style={{fontSize:'14px'}} >Firebase Summit</p>
                  <p className='' style={{fontSize:'14px'}} >Twitter</p>
                  <p className='' style={{fontSize:'14px'}} >Youtube</p>
    
                </div>
               </Col>
               <Col sm={12} md={6} lg={4} xl={3}>
               <div className='ms-4'>
                  <p className='' style={{fontSize:'18px'}}>Learn</p>
                  <p className='' style={{fontSize:'14px'}}>Guides</p>
                  <p className='' style={{fontSize:'14px'}} >Reference</p>
                  <p className='' style={{fontSize:'14px'}} >Samples</p>
                  <p className='' style={{fontSize:'14px'}} >Libraries</p>
                  <p className='' style={{fontSize:'14px'}} >GitHub</p>
                </div>
               </Col>
            </Row>
            <hr />
            <Row>
              <Col>
              <div className='ms-4 d-flex flex-row'>
                  
                  <p className='ms-4' style={{fontSize:'18px'}}><span className='text-info fw-bolder'>G</span><span className='text-danger fw-bolder'>o</span><span className='text-warning fw-bolder'>o</span><span className='text-info fw-bolder'>g</span><span className='text-primary fw-bolder'>l</span><span className='text-danger fw-bolder'>e</span> for developers</p>
                  <p className='ms-3' style={{fontSize:'14px'}}>Guides</p>
                  <p className='ms-3' style={{fontSize:'14px'}} >Reference</p>
                  <p className='ms-3' style={{fontSize:'14px'}} >Samples</p>
                  <p className='ms-3' style={{fontSize:'14px'}} >Libraries</p>
                  <p className='ms-3' style={{fontSize:'14px'}} >GitHub</p>
                </div>
              </Col>
            </Row>
            <hr />
            <p className='ms-5'  style={{fontSize:'14px'}} >Terms | Privacy</p>
            <Button className='ms-5' variant="secondary"><i class="fa-solid fa-globe"></i>       English   <i class="fa-solid fa-caret-down"></i></Button>
      
          </div>
    </>
  )
}

export default Footer