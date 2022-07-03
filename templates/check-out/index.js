import React, { useEffect, useState } from "react" 
import { ImageBaseUrl } from "../../utils/Baseurl"

import Link from "next/link"; 

export default function CheckoutPageTemplate() {
   const [userIs, setUser] = useState("")
   const [projects, setProjects] = useState([])
   const [packages, setPackages] = useState([])
   const [learningProjects, setLearningProjects] = useState([])
   const [favProjects, setFavProjects] = useState([])
   const [inProgressProjects, setInProgressProjects] = useState([])
   const [percentageData, setPercentageData] = useState([])
   const [activePanel, setActivePanel] = useState(0)
   const [loading, setLoading] = useState(false)

 

   return (
      <section className="innerbanner">
         <div className="banner-plans" style={{ backgroundImage: 'url(/static/images/learning.jpeg)' }}>
            <div className="container"> 
                   <h3>Check Out </h3>
                   <p>Simulator is an impactful alternative #training method to 
traditional coating and spray-painting techniques.</p>
               </div>        
         </div> 

<section className="progilesection"> 
<div className="container">
	<ul className="tuch-monu">
       <li className="active"><i className="fa fa-check-circle" aria-hidden="true"></i> <p>ACCOUNT</p></li> 
       <li><i className="fa fa-check-circle" aria-hidden="true"></i> <p>PAYMENT</p></li> 
       <li><i className="fa fa-check-circle" aria-hidden="true"></i> <p>REVIEW</p></li> 
	</ul> 
	
	
<a className="backto" href="#">  Back to Pricing</a>
<div className="row mt-3">
	<div className="col-md-8">
		<div className="accountmain"> 
		  <div className="accordion-item">  
		     <div className="accountdetails">  
            <li><h4><span>1</span>Account details</h4> </li> 
            <li><p>Already have an aaount? <a href="#">Sing in </a></p></li> 
	        </div> 
	     </div> 
        <div id="collapseOne" className="accordion-collapse">
        <div className="interacordian">
        <form>
			  <div className="row">
				 <div className="col-md-6 formgrup">
				   <label>First name</label>
				   <input type="text" className="form-control" placeholder="First name"/>
				</div>
				
				 <div className="col-md-6 formgrup">
				  <label>Last name</label>
				  <input type="text" className="form-control" placeholder="Last name"/>
				</div>
				
				 <div className="col-md-6 formgrup">
				  <label>Email* </label>
                  <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                   </div>
				
				 <div className="col-md-6 formgrup">
				   <label>Confirm Email*</label>
				   <input type="text" className="form-control" placeholder="Confirm Emai"/>
				</div>
				
				 <div className="col-md-6 formgrup">
				  <label>Country of residence*</label>
				  <input type="text" className="form-control" placeholder="Country of residence"/>
				</div>
				
				 <div className="col-md-6 formgrup">
				  <label>Compnany Name</label>
                  <input type="email" className="form-control" id="inputEmail4" placeholder=""/>
                  </div>
				
				 <div className="col-md-6 formgrup">
				  <label>Tax ID (optional)</label>
                  <input type="email" className="form-control" id="inputEmail4" placeholder=""/>
                 </div>
			  </div> 

				<div className="check-button"> 
				    <div className="form-check">
					<input className="form-check-input" type="checkbox" id="gridCheck1"/>
					<label className="form-check-label" for="gridCheck1">Example checkbox</label>
				    </div>  
					<button type="submit" className="carts">Continue</button>
				</div>
            </form>
            </div>
            </div>
	      </div>
         <div className="accountmain"> 
            <div className="accordion-item">  
               <div className="accountdetails">  
                  <li><h4><span>2</span> Payment </h4> 
                  <p>Select a Payment method <strong>299</strong></p>
                  </li>  
               </div> 
            </div> 
            <div id="collapseOne" className="accordion-collapse">
            <div className="interacordian">
               <h3>payment method Space</h3>
                <p>Don't see your preferred Payment method ? Let us know..</p>
            </div>
           </div>
	      </div>  
         <div className="accountmain"> 
            <div className="accordion-item">  
               <div className="accountdetails">  
                  <li><h4><span>3</span> Review and confirm  </h4> </li>  
                  <li> Secure checkout  </li>  
               </div> 
            </div> 
            <div id="collapseOne" className="accordion-collapse">
            <div className="review-confirm interacordian">
               <table>
                  <tr>
                     <td>
                        <div className="reviewItem">
                        <figure><img  src="/static/images/learning.jpeg" alt="" /></figure> 
                        <h4>Course 2D - 3D Space layers, Cameras & Depth <small>Sector’s name</small></h4>
                        </div>
                     </td>
                     <td><strong className="accountdetails">₹ 499 </strong> <span><del> ₹ 899</del>16% Discount</span></td>
                  </tr>
                  <tr>
                     <td>
                        <div className="reviewItem">
                        <figure><img  src="/static/images/learning.jpeg" alt="" /></figure> 
                        <h4>Course 2D - 3D Space layers, Cameras & Depth <small>Sector’s name</small></h4>
                        </div>
                     </td>
                     <td><strong className="accountdetails">₹ 499 </strong> <span><del> ₹ 899</del>16% Discount</span></td>
                  </tr>
                  <tr>
                     <td>
                        <div className="reviewItem">
                        <figure><img  src="/static/images/learning.jpeg" alt="" /></figure> 
                        <h4>Course 2D - 3D Space layers, Cameras & Depth <small>Sector’s name</small></h4>
                        </div>
                     </td>
                     <td><strong className="accountdetails">₹ 499 </strong> <span><del> ₹ 899</del>16% Discount</span></td>
                  </tr>
               </table>
               <button type="submit" className="carts">Purchase</button>
           </div>
           </div>
	      </div>
	    </div> 

	<div className="col-md-4">
       <div className="accountmain"> 
           <h4 className="order">Order summary</h4> 
           <div className="orders plan-list">
            <table>
               <tr>
                  <th>PLAN</th>
                  <th>PRICE</th>
                </tr> 
                <tr>
                  <td>individual Standard</td>
                  <td>₹1.499 </td>
                </tr>
                <tr>
                  <td>SUB TOTAL </td>
                  <td>₹1.499 </td>
                </tr>
                <tr>
                  <td>ESTIMATED TAX<sup>1</sup> </td>
                  <td>₹ 0 </td>
                </tr>
            </table> 
           </div>
 
			 

			<ul className="plan-list">    
			   <li><p>Order summary</p> <p>1.499</p></li>    
			</ul> 
	    </div> 
		   <p className="Order-text">In publishing and graphic design, Lorem ipsum is a placeholder text commonly   Lorem ipsum may be used as a placeholder before final copy is....</p>
		
		
	</div> 
</div> 
</div>  
</section>




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
