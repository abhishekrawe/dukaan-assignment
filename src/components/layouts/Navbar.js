import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (

<NavContainer className="main-navbar">
<nav class="navbar navbar-expand-lg bg-primary">

<div class="container container-fluid">
  <a class="navbar-brand" href="#"> <img src="/asset/logo-dukaan.svg"/></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      
    </ul>
    <div class="d-flex">
      <button class="btn bg-primary text-light me-3" >Sign in</button>
      <button class="btn bg-light text-primary">Dukaan for PC</button>
    </div>
  </div>
</div>
</nav>
</NavContainer>
    
  );
}


export default Navbar;
const NavContainer = styled.nav`
.navbar{
  padding-bottom : 328px;
}
.bg-primary {
  background-color : #146EB4 !important;

}
.text-primary{
  color : #146EB4 !important;
}

.container{
  padding-left : 3rem;
}


`;