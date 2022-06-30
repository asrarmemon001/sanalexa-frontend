import React, { useEffect, useState } from "react" 
import AOS from "aos"; 
import { getUser, getProjectAndPackage } from "../../utils/api-Request"
import { ImageBaseUrl } from "../../utils/Baseurl"

import Link from "next/link";
// import $ from 'jquery';

export default function LeaningPageTemplate() {
   const [ userIs , setUser ] = useState("")
   const [ projects, setProjects ] = useState([])
   const [ packages, setPackages ] = useState([])

   const tabHandle = () => {
      $(".alltabsyel ul li a").click(function(){
         var id =  $(this).attr("data-id");
         $('.learning-historytab').css('display','none');
         $('#'+id).css('display','block');
         $('.alltabsyel ul li a').removeClass('active');         
                  $(this).addClass('active');            
        });
   }
   useEffect(() => {
      AOS.init();
      AOS.refresh();
      tabHandle()
   }, []);

   const getUserData = async() => {
      const user = await getUser()
      const response = user?.data?.data
      if(response){
         setUser(response)
      }
   }

   const getCourses = async() => {
      const coursesData = await getProjectAndPackage()
      const response = coursesData?.data?.data
      console.log("coursesData----", response)
      if(response){
         setPackages(response?.packages)
         setProjects(response?.projects)
      }
   }

   useEffect(() => {
      getUserData()
      getCourses()
   },[])

    return (
      <section className="learning-content"> 
         <div className="banner-plans" style={{ backgroundImage: 'url(/static/images/learning.jpeg)' }}>
               <div className="container-fuild">
                  <div className="learningdef">
                  <div className="learningimg">
                     <img src={`${userIs?.profilePic ? ImageBaseUrl + userIs?.profilePic : "/static/images/user.png"}`} />
                  </div>
                  <div className="banner-content-ple">
                     <h2>{userIs?.name?.toUpperCase()}</h2>
                     <a href="#" className="eidtaccou"><i className="fa fa-pencil" aria-hidden="true"></i> edit Account </a>
                  </div>
                  </div>
               </div>
         </div>
         <div className="alltabsyel">
            <ul>
               <li><a href="javascript:void(0)" data-id="inprogres">In Progress (2)</a></li>
               <li><a href="javascript:void(0)" data-id="collections">My Favorites (2)</a></li>
               <li><a href="javascript:void(0)" data-id="history">Learning History (1)</a></li>
               <li><a href="javascript:void(0)" data-id="history">Purchased Courses (1)</a></li>

            </ul>
         </div>
         <div className="container">
            <div className="tabpaneal">
               {/* for inprogress */}
               <div className="learning-historytab" id="inprogres">
                  <div className="historytablist">
                     <div className="row">
                        <div className="col-md-3">
                           <img src="/static/images/original.jpeg" />
                        </div>
                        <div className="col-md-5">
                           <div className="historytabcontent">
                              <p>Learning Path</p>
                              <h4>Course 2D - 3D Space layers, Cameras & Depth</h4>
                              <span>June 2022</span>
                              <h6> <img src="/static/images/feather-ch.png" /> Completed 6/06/2022</h6>
                           </div>
                        </div>
                        <div className="col-md-4 layers"> 
                           <a href="#" className="downloadcertificate">Download Certificate</a>
                           <a href="#" className="share">Share</a> 
                        </div>
                     </div>
                  </div>
               </div>
               {/*  */}
               <div className="learning-historytab" id="saved">
                  <div className="historytablist">
                     <div className="row">
                        <div className="col-md-3">
                           <img src="/static/images/original.jpeg" />
                        </div>
                        <div className="col-md-5">
                           <div className="historytabcontent">
                              <p>Learning Path</p>
                              <h4>Course 2D - 3D Space layers, Cameras & Depth</h4>
                              <span>June 2022</span>
                              <h6> <img src="/static/images/feather-ch.png" /> Completed 6/06/2022</h6>
                              
                           </div>
                        </div>
                        <div className="col-md-4 layers"> 
                           <a href="#" className="downloadcertificate">Download Certificate</a>
                           <a href="#" className="share">Share</a> 
                        </div>
                     </div>
                  </div>
               </div>
               {/*  */}
               <div className="learning-historytab" id="collections">
                  <div className="historytablist">
                     <div className="row">
                        <div className="col-md-3">
                           <img src="/static/images/original.jpeg" />
                        </div>
                        <div className="col-md-5">
                           <div className="historytabcontent">
                              <p>Learning Path</p>
                              <h4>Course 2D - 3D Space layers, Cameras & Depth</h4>
                              <span>June 2022</span>
                              <h6> <img src="/static/images/feather-ch.png" /> Completed 6/06/2022</h6>  
                           </div>
                        </div>
                           <div className="col-md-4 layers"> 
                           <a href="#" className="downloadcertificate">Download Certificate</a>
                           <a href="#" className="share">Share</a> 
                           </div>
                     </div>
                  </div>
               </div>
            </div>        
         </div>    
         <section className="banner bannerbottom" style={{ backgroundImage: 'url(/static/images/banner-bottom.jpg)' }}>
            <div className="container">
                <div className="main-banner">
                    <div className="banner-content">
                        <h1>Whan us to deploy paint  Simulator at your site?</h1>
                        <p>Our technical experts will respond to your query at the earliest.</p>
                         <Link href="#"><a className="button-download-launcher">Contact Us</a></Link>
                    </div>
                    {/* <div className="banner-img">
                        <img src="/static/images/right-bott.png" />
                    </div> */}
                </div>
            </div>
         </section>
      </section>    
   )
} 
 