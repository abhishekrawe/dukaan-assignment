import React from 'react'
import styled from 'styled-components';
import './Styles/index.css'


function Slogan() {
  return (
    <div className='container rounded position-relative bg-light p-5 main-card'>
      <div className='px-md-5 py-5 bg-main'>
      <h1> Free slogan maker </h1>
            <p className="texts"> Simply enter a term that describes your business, and get up to 1,000 <br/>
                relevant slogans for free.</p>
            <div class="row-auto mb-5">
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

          <div class="row row-cols-sm-2 gx-4 gy-3">
             <div className='col'>
               <div className='card bg-light border-0 '>
                    <div className='card-body'>
                          <p className='mb-0'> There is no Sore it will Not Heal, No cool it will not Subdue. </p>
                    </div>
               </div>
             </div>
             <div className='col'>
               <div className='card bg-light border-0 '>
                    <div className='card-body'>
                          <p className='mb-0'> There is no Sore it will Not Heal, No cool it will not Subdue. </p>
                    </div>
               </div>
             </div>

             <div className='col'>
               <div className='card bg-light border-0 '>
                    <div className='card-body'>
                          <p className='mb-0'> There is no Sore it will Not Heal, No cool it will not Subdue. </p>
                    </div>
               </div>
             </div>
             <div className='col'>
               <div className='card bg-light border-0 '>
                    <div className='card-body'>
                          <p className='mb-0'> There is no Sore it will Not Heal, No cool it will not Subdue. </p>
                    </div>
               </div>
             </div>

             <div className='col'>
               <div className='card bg-light border-0 '>
                    <div className='card-body'>
                          <p className='mb-0'> There is no Sore it will Not Heal, No cool it will not Subdue. </p>
                    </div>
               </div>
             </div>
             <div className='col'>
               <div className='card bg-light border-0 '>
                    <div className='card-body'>
                          <p className='mb-0'> There is no Sore it will Not Heal, No cool it will not Subdue. </p>
                    </div>
               </div>
             </div>
          </div>

      </div>

        <hr/>

        <div className='d-flex justify-content-center'>
        <nav aria-label="...">
            <ul class="pagination pagination-sm">
            <li class="page-item active" aria-current="page">
            <span class="page-link">1</span>
        </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
         </ul>
</nav>
        </div>
          
          
        
    </div>
  );
}

export default Slogan;

;