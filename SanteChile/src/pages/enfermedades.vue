<template>
  <f7-page name="enfermedades">

    <!-- Top Navbar -->
  
   <div class="navbar">
  <div class="navbar-inner">
    <!-- Additional "sliding" class -->
   <div class="left">
        <a class="link back">
          <i class="icon icon-back"></i>
          <span class="if-not-md">Back</span>
        </a>
      </div>
    <!-- Additional "sliding" class -->
    <div class="title sliding"><strong>SanteChile</strong></div>
    <div class="right">
      <a href="/menu/" class="link"><f7-icon f7="home"></f7-icon> </a>
    </div>
  </div>
</div>
        <h1 class="text-align-center"> Zona a consultar</h1>
      <p class="text-align-center" > <img data-src="https://cdn.pixabay.com/photo/2016/03/31/15/19/head-1293162_960_720.png" width="150" height="150"  class="lazy"></p>
        <f7-row>
        <f7-button  fill raised href='/partes_Cabeza/'  class="col button button-small text-color-black"><strong> Cabeza</strong></f7-button>  
      </f7-row>
      <p  class="text-align-center" >  <img  data-src="https://cdn.pixabay.com/photo/2017/10/08/19/55/fracture-2831365_960_720.png" width="150" height="150" class="lazy"  ></p>  
      <f7-row>
        <f7-button  fill raised href='/partes_Brazo/'  class="col button button-small text-color-black"> <strong> Brazos</strong> </f7-button>  
      </f7-row>
    
  </f7-page>
</template>

 
