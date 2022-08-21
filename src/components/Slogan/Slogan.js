
import React from 'react'
import styled from 'styled-components';
import './Styles/index.css'

function SloganComponent({sloganText}) {
   return ( <div className='col m-3 flex-wrap  mb-4' >
   <div className='card bg-light border-0  '>
        <div className='card-body '>
              <p className='mb-0'> {sloganText}</p>
        </div>
        
   </div>
 </div>
   )
}

function Slogan() {

  
  
  let arr1 = [
    { slogan : "There is no Sore it will Not Heal, No cool it will not Subdue."},
    { slogan : "There is no Sore it will Not Heal, No cool it will not Subdue."},
    { slogan : "Review the facts cool is the best."},
    { slogan : "There is no Sore it will Not Heal, No cool it will not Subdue."},
    { slogan : "There is no Sore it will Not Heal, No cool it will not Subdue."},
    { slogan : "There is no Sore it will Not Heal, No cool it will not Subdue."},
    { slogan : "There is no Sore it will Not Heal, No cool it will not Subdue."},
    { slogan : "There is no Sore it will Not Heal, No cool it will not Subdue."},
    { slogan : "There is no Sore it will Not Heal, No cool it will not Subdue."},
  ]
  let arr2 = [
    { slogan : "coziness building for tomorrow"},
    { slogan : "Review the facts cool is the best."},
    { slogan : "coziness building for tomorrow"},
    { slogan : "coziness building for tomorrow"},
    { slogan : "coziness building for tomorrow"},
    { slogan : "coziness building for tomorrow"},
    { slogan : "coziness building for tomorrow"},
    { slogan : "coziness building for tomorrow"},
    { slogan : "coziness building for tomorrow"},
  ]

  return (
    <div className="background mb-5">
<div className='container rounded position-relative bg-light p-5 main-card'>
      <div className='px-md-5 py-5 bg-main'>
      <h1 style={{fontSize:'3rem'}} class="text"> <span style={{fontWeight:'bold'}}>Free slogan maker</span> </h1>
            <p className="texts"> Simply enter a term that describes your business, and get up to 1,000 <br/>
                relevant slogans for free.</p>
            <div class="row-auto mb-4 mt-5">
            <label className="mb-2" for="text">Word for your slogan</label>
            <input placeholder='Cozy' className='form-control mb-3 w-50'></input>
            </div>
            
            <div class="row-auto">
            <button type="submit" class="btn btn-primary mb-3">Generate slogans</button>
            <hr/>
             
            <div className=' flex-wrap d-flex justify-content-between align-items-center mb-4'>
            <h5 className="text-xs-center mt-3">
            We have generated 1,023 slogans for “cozy”
            </h5>
            <button class="btn btn-outline-primary">Download all</button>
            </div>
            </div>

           <div className="d-flex gx-4 gy-3 row row-cols-sm-2 gx-4 gy-3">
            <div>{arr1.map(e => <SloganComponent sloganText={e.slogan} key = {e} />)}</div>
            <div>{arr2.map(e => <SloganComponent sloganText={e.slogan} key = {e} />)}</div>
            
           </div>
           
      </div>

        

        <div className='d-flex justify-content-center'>
        <img class="mb-3" src="/asset/Gp.svg" alt="Generic placeholder image" width="1100"/>

       
        {/* <nav aria-label="...">
            <ul class="pagination pagination-sm">
            <li class="page-item active" aria-current="page">
            <span class="page-link">1</span>
        </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
         </ul>
</nav> */}
        </div>
          
          
        
    </div>
    </div>
    
  );
}

export default Slogan;

;