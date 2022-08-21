import React from 'react'
import styled from 'styled-components'



 function Footer() {
  return (
     <FooterContainer className="main-footer">
      <div className="footer-middle">
      <div className="container">
         <div className = "d-flex flex-wrap justify-content-between">
            <ul className="list-unstyled">
               <img src="/asset/white.svg" alt="logo" />
            </ul>
            <ul className="list-unstyled">
               <li>Contact</li>
               <li>FAQ's</li>
            </ul>
            <ul className="list-unstyled">
               <li>Tutorials</li>
               <li>Blog</li>
               
            </ul>
            <ul className="list-unstyled">
               <li>Privacy</li>
               <li>Banned Items</li>
               
            </ul>
            <ul className="list-unstyled">
               <li>About</li>
               <li>Jobs </li>  
            </ul>  
            <ul className="list-unstyled">
               <li>Facebook</li>
               <li>Twitter</li>
               <li>Linkedin</li>
            </ul>
         </div>
         <div className="footer-bottom ">
            <hr/>
            <div className='d-flex justify-content-between align-items-center'>
            <p className="text-xs-center">
             Dukaan {new Date().getFullYear()}, All rights reserved.
            </p>
            <p> 
            Made in India <img src="/asset/flag.svg" alt="flag"/>
            </p>
            </div>
         </div> 
      </div>
      </div>
     </FooterContainer>
  );
}

export default Footer;
const FooterContainer = styled.footer`
.footer-middle {
   background: var(--mainDark);
   padding-top : 3rem;
   color: var(--mainWhite);
}

.footer-bottom {
   padding-top: 1rem;
   padding-bottom: 1rem;

}
`;