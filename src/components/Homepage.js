import React from 'react'
import './Homepage.css'
import { useRef} from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';




export default function Homepage() {
  const hireaVendor = useRef(null);
  const joinAsVendor = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior:'smooth'
    })
  }

  const navigate = useNavigate(null);

  
  return (
    <div>
    <Navbar/>
    <div className='include-all'>
      <div  className='container'>
        <div className='name'>  Transit Pro </div>
        <div  className='intro'>
          RUN YOUR LOGISTIC RFQ'S/TENDERS ON OUR PLATFORM &amp; GET COMPETITIVE BIDS FROM 1000+ VARIED <br></br>3PL VENDORS
        </div>
     <div className='b-con'>
      <div className='hireavendor'>
      <button type="button" class="btn btn-primary btn-lg"  onClick={()=>scrollToSection(hireaVendor)}> Hire A Vendor </button>
      </div>

      

      <div className='joinus'>
      <button type="button" class="btn btn-primary btn-lg" onClick={()=>scrollToSection(joinAsVendor)}>Join As Vendor </button>
     
      </div>
      </div>

    
    </div>
    </div>



    <div ref={hireaVendor} className='Middle'>
       <div className='info-corpoate'>
       
       <div className='h-con'>Transit Pro is a One stop logistic Market place where<br></br> the corporates can:</div>
          <div className='i-con'>
            <br/>1. Carry out their RFQ process or 3pl onboarding process among 10000+ vendors<br/>
            <br/>2. Fulfill any adhoc requirement by a pool of TP assured vendors. <br/>
            <br/> 3. Leverage TP’s Market Intelligence which is closely based on the real-time Industry trends.<br/>
            <br/>4. Leverage TP’s Dynamic Feedback Intelligence that captures inside out data, right from Vendor <br></br>rating to it’s SLA rating.<br/>
            <br/> 5. Leverage TP’s Vendor data for due diligence before onboarding.<br/>
          </div> 
       </div>
       <div>
        <div className='mcontainer'>
       <div class="shadow p-3 mb-5 bg-body rounded">
       <form>
        <div class="mb-3">
        <label for="exampleInputContact" class="form-label">Contact No.</label>
        <input type="tel" pattern='[0-9]{10}' class="form-control" id="contact" aria-describedby="contact-s"/>
       
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
       <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
       </div>
        <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
       </div>
       <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"> Confirm Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
       </div>
          <button type="submit" class="btn btn-primary">Register</button>
         </form>    <hr></hr>
         <div id="emailHelp" class="form-text">Already A User?</div>
         <br></br>
         <button type="submit" class="btn btn-primary" onClick={()=>{navigate('/Login')}}>Login</button>
         </div>
         </div>
      
    </div>
    </div>



    
    <div ref={joinAsVendor} className='Middle2'>
       <div className='info-Vendor'>
       
       <div className='j-con'>Transit pro is here to give you fair business opportunities<br></br> and democratize the growing logistics sector:</div>
        <div className='k-con'>
           <br/>  1. Find out business opportunities in your region ( rfq’s/tenders or adhoc/real-time<br></br> delivery requirements available) and bid for these through our platform. <br/>
            <br/>2. We assist you in the bidding process and help you get in touch with the company official. <br/>
            <br/> 3. You get a fair chance to win bids on the basis of your merit &amp; the rates offered by you.<br/>
            <br/>4. We help you become authorized vendors of delivery companies by<br></br> helping you find and get through the onboarding process.<br/>
            </div>
     </div>
     <div>
        <div className='n-container'>
       <div class="shadow p-3 mb-5 bg-body rounded">
       <form>
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Contact No.</label>
        <input type="text" class="form-control" id="name" aria-describedby="name-s"/>
       
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
       <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
       </div>
        <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
       </div>
       <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"> Confirm Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
       </div>
          <button type="submit" class="btn btn-primary">Register</button>
         </form>    <hr></hr>
         <div id="emailHelp" class="form-text">Already A User?</div>
         <br></br>
         <button type="submit" class="btn btn-primary" onClick={()=>{navigate('/Login')}}> Login</button>
         
         </div>
         </div>
      
    </div>
    </div>

    

    <div className='i-all'>
        <div className='c-container'>
         <div> Careers <hr></hr>
         <hr></hr></div>
         
        </div>
        <div className='p-container'>
         <div> We are Hiring !!!<hr></hr>
         <hr></hr></div>
        </div>
        <div className='mail'>
        E-mail: transitpro007@gmail.com
        
        </div>
 
      
    </div>









   
    <Outlet/>
    </div>
  )
}

