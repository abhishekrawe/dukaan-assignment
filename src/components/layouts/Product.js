import React from 'react'
import sap from '../../assets/sap.png'
import pink from '../../assets/pink.png'
import greeny from '../../assets/greeny.png'
import bluei from '../../assets/bluei.png'

function ProductComponent({image, title, text}) {

  return (
    
   <div className="col-sm">
   <div className="card border-0">
   <img className="card-img-top" src={image} alt="Cardcap"/>
   <div className="card-body">
     <h5 className="card-title">{title}</h5>
     <p className="card-text  text-xs-center">{text}</p>
   </div>
 </div>
 </div>
  )
}

 function Product() {

  let data = [
    {image: sap,
    title:"Privacy Policy Generator" ,
  text : "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."},
   
  
  {image: pink,
    title:"Terms & Conditions Generator" ,
  text : "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.."},
  
  
  {image: greeny,
    title:"Domain Name Generator" ,
  text : "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."},
  
  
  {image: bluei,
    title:"Invoice Generator" ,
  text : "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.."},
   
  ]


  return (


<div className="container my-5">   
             <div className="row">
               <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
                 <img className="mb-3" src="asset/frp.svg" alt="Genericimage3" width="48" height="48"/>
                 <h2>Search </h2>
                 <p className="w-75 text-center" >Simply add a keyword or a term related to your business in the slogan maker search box. Wait for the magic to happen.</p>
            
               </div>
               <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
                 <img className="mb-3" src="asset/grp.svg" alt="Genericimage2" width="56" height="48"/>
                 <h2>Select</h2>
                 <p className="w-75 text-center">Choose from thousands of options generated by the slogan maker that fit your needs..</p>
          
               </div>
               <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
                 <img className="mb-3" src="asset/srp.svg" alt="Genericimage1" width="65" height="65"/>
                 <h2>Stand out</h2>
                 <p className="w-75 text-center">Congrats on your new slogan. It's time to win the world!</p>
              
               </div>
             </div>
             <h1 className=" my-5"> Try our other free products</h1>
             <div className="row row-cols-sm-2 row-cols-md-3 g-4"> 
      {data.map((obj,index) => <ProductComponent key={index} image={obj.image} title={obj.title} text={obj.text} /> )}
    </div>
    </div>


    

  )
}
export default Product;



