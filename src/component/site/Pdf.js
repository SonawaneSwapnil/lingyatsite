import React, { Component, useRef, useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
// import jsPdf from 'jspdf'
import { useReactToPrint } from "react-to-print";
import Service from "../../service/Service";
import moment from "moment";

export default function Pdf() {
  const [usersData, setUsersData] = useState();

  useEffect(() => {
    loadAllUsersData();
  }, []);

  const loadAllUsersData = () => {
    Service.getSingleUser(JSON.parse(localStorage.getItem("USERID"))).then(
      (res) => {
        setUsersData(res.data);
        console.log(res.data);
      }
    );
  };

  // generatePDF=()=>{
  //     var doc=new jsPDF('p','pt');

  // }
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  let navigate = useNavigate();
  return (
    <div>
        <div>
        {/* <!-- ==========Breadcrumb-Section========== --> */}
    <section className="breadcrumb-area profile-bc-area">
   
        <div className="container">
            <div className="content">
                <h2 className="title extra-padding">
                    Print Profile
                </h2>
                <ul className="breadcrumb-list extra-padding">
                    <li>
                        <Link to="index.html">
                            Home
                        </Link>
                    </li>

                    <li>
                    Print Profile
                    </li>
                </ul>
            </div>
        </div>
    </section>
      <section className="profile-section">
        <div className="container">
          <div className="row justify-content-center">
          
            <div className="info-box card">
              <div className="header " >
                 <div ref={componentRef} > 
                  <img src="header image.jpg " className="card-img-top"/>
                  
           
                  <div className="content border border-dark ">
                  {/* <div className="p-inner-content">
                                <div className="profile-img ">
                                    <img src=" /images/profile/profile-user.png" alt=""/>
                                    <div className="active-online"></div>
                                </div>
                  </div> */}
                  <div className="profile-img d-flex justify-content-end ">
                                    <img src="assets/images/profile/profile-user.png" alt=""/>
                                    
                                </div>
                    {usersData &&
                      usersData.map((index) => (
                          
                          
                        //  <ul className="infolist  ml-3">
                        
                        //   <li list-group-item d-flex justify-content-between align-items-center>
                        //     <span className="ml-3 font-weight-bold">Name/नाव:</span>
                        //     <span className='ml-3 text-right'>{index.user_name}</span>
                        //   </li>
                          
                        //   <li>
                        //     <span className="ml-3">Marital status/वैवाहिक स्थिती:</span>
                        //  <span className='ml-3'>{index.married_status}</span>
                        //   </li>

                        //   <li>
                        //     <span className="ml-3">City/शहर:</span>
                        //      <span className='ml-3'>{index.city}</span>
                        //   </li>

                        //   <li>
                        //      <span className="ml-3">Date Of Birth/जन्मतारीख:</span>
                        //      <span className='ml-3'>
                        //        {moment(`${index.dob}`).format("YYYY/MM/DD")}
                        //      </span>
                        //    </li>
                        //   <li>
                        //     <span className="ml-3">Birth Place/जन्मतारीख ठिकाण:</span>
                        //      <span className='ml-3'>{index.birth_place}</span>
                        //    </li>
                        //    <li>
                        //      <span className="ml-3">Birth time/जन्म वेळ:</span>
                        //      <span className='ml-3'>{index.birth_time}</span>
                        //    </li>
                        //    <li>
                        //      <span className="ml-3">Marital status/वैवाहिक स्थिती:</span>
                        // <span className='ml-3'>{index.married_status}</span>
                        //   </li>

                        //    <li>
                        //      <span className="ml-3">
                        //        Educational Qualification/शैक्षणिक पात्रता:{" "}
                        //     </span>
                        //      <span className='ml-3'>{index.education}</span>
                        //    </li>
                        //    <li>
                        //      <span className="ml-3">Service or Business/सेवा किंवा व्यवसाय:</span>
                        //  <span className='ml-3'>{index.bussiness}</span>
                        //   </li>
                        //   <li>
                        //      <span className="ml-3">Income/उत्पन्न:</span>
                        //    <span className='ml-3'>{index.income}</span>
                        //   </li>
                        //    <li>
                        //      <span className="ml-3">Designation/हुद्दा:</span>
                        //      <span className='ml-3'>{index.designation}</span>
                        //    </li>
                        //    <li>
                        //     <span className="ml-3">Workplace/कामाची जागा:</span>
                        //     <span className='ml-3'>{index.designation}</span>
                        //    </li>
                        //    <li>
                        //      <span className="ml-3">Height/उंची:</span>
                        //      <span className='ml-3'>{index.height}</span>
                        //    </li>
                        //    <li>
                        //      <span className="ml-3">Blood-Group/रक्त गट:</span>
                        //     <span className='ml-3'>{index.blood_group}</span>
                        //   </li>
                        //    <li>
                        //      <span className="ml-3">Color/रंग:</span>
                        //      <span className='ml-3'>{index.color}</span>
                        //    </li>
                        //   <li>
                        //     <span className="ml-3">Weight/वजन:</span>
                        //     <span className='ml-3'>{index.weight}</span>
                        //   </li>
                        //    <li>
                        //      <span className="ml-3">Address/पत्ता:</span>
                        //      <span className='ml-3'>{index.address}</span>
                        //    </li>

                        //    <li>
                        //      <span className="ml-3">Father Name/वडीलांचे नावं:</span>
                        //      <span className='ml-3'>{index.father}</span>
                        //    </li>
                        //    <li>
                        //      <span className="ml-3">Contact Number/संपर्क क्रमांक:</span>
                        //      <span className='mr-3'>{index.father_contact}</span>
                        //    </li>
                          
                        //   <li>
                        //      <span className="ml-3">Expection/अपेक्षा वधू/वर:</span>
                        //      <span className='ml-3'>{index.expectation}</span>
                        // //   </li>
                        //  </ul>
                        
                         <dl className="row ml-4  ">
                             <dt className="col-sm-6 ">Name/नाव:</dt>
                             <dd className="col-sm-6">{index.user_name}</dd>
                             <dt className="col-sm-6 ">Marital status/वैवाहिक स्थिती:</dt>
                             <dd className="col-sm-6">{index.married_status}</dd>
                         <dt className="col-sm-6">City/शहर:</dt>
                             <dd className="col-sm-6">{index.city}</dd>
                            
                            <dt className="col-sm-6">Date Of Birth/जन्मतारीख:</dt>
                            <dd className="col-sm-6">
                             {moment(`${index.dob}`).format("YYYY/MM/DD")}
                           </dd>
                         
                        
                          <dt className="col-sm-6">Birth Place/जन्मतारीख ठिकाण:</dt>
                           <dd className="col-sm-6">{index.birth_place}</dd>
                       
                       
                            <dt className="col-sm-6">Birth time/जन्म वेळ:</dt>
                             <dd className="col-sm-6">{index.birth_time}</dd>
                            <dt className="col-sm-6">Marital status/वैवाहिक स्थिती:</dt>
                           <dd className="col-sm-6">{index.married_status}</dd>
                         
                            <dt className="col-sm-6">
                             Educational Qualification/शैक्षणिक पात्रता:
                             </dt>
                             <dd className="col-sm-6">{index.education}</dd>
                      
                             <dt className="col-sm-6">
                             Service or Business/सेवा किंवा व्यवसाय:
                             </dt>
                               <dd className="col-sm-6">{index.bussiness}</dd>
                        
                        
                             <dt className="col-sm-6">Income/उत्पन्न:</dt>
                           <dd className="col-sm-6">{index.income}</dd>
                       
                      
                            <dt className="col-sm-6">Designation/हुद्दा:</dt>
                             <dd className="col-sm-6">{index.designation}</dd>
                        
                        
                            <dt className="col-sm-6">Workplace/कामाची जागा:</dt>
                            <dd className="col-sm-6">{index.designation}</dd>
                        
                        
                            <dt className="col-sm-6">Height/उंची:</dt>
                              <dd className="col-sm-6">{index.height}</dd>
                      
                        
                              <dt className="col-sm-6">Blood-Group/रक्त गट:</dt>
                           <dd className="col-sm-6">{index.blood_group}</dd>
                        
                      
                           <dt className="col-sm-6">Color/रंग:</dt>
                             <dd className="col-sm-6">{index.color}</dd>
                       
                           
                            <dt className="col-sm-6">Weight/वजन:</dt>
                              <dd className="col-sm-6">{index.weight}</dd>
                         
                      
                              <dt className="col-sm-6">Address/पत्ता:</dt>
                           <dd className="col-sm-6">{index.address}</dd>
                        

                        
                          <dt className="col-sm-6">Father Name/वडीलांचे नावं:</dt>
                            <dd className="col-sm-6">{index.father}</dd>
                         
                          
                             <dt className="col-sm-6">Contact Number/संपर्क क्रमांक:</dt>
                              <dd className="col-sm-6">{index.father_contact}</dd>
                          
                          
                          
                              <dt className="col-sm-6">Expection/अपेक्षा वधू/वर:</dt>
                            <dd className="col-sm-6">{index.expectation}</dd>
                          
                     </dl>
                      ))}
                      
                      </div>
                      <img src="footer image.jpg" className="img-fluid card-img-bottom" />
                  </div>
                </div>
              </div>
              
            
            
          </div>
          
         </div> 
         
      </section>
      <div className="d-flex justify-content-center"><button
        type="button"
        onClick={handlePrint}
        className="print__button custom-button mr-5"
      >{" "}
      Print Pdf{" "}
    </button></div>
      
      
     </div>   
    </div>
  );
}
