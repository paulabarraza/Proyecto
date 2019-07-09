<template>

  <f7-page name="menu">
    <!-- Top Navbar -->
 
<div class="navbar">
  <div class="navbar-inner">
    
    <!-- Additional "sliding" class -->
    <div class="title sliding"><strong>SanteChile</strong></div>
  </div>
</div>

<div class="page">
 <div class="toolbar toolbar-bottom">
    <div class="toolbar-inner">
      
    <a href="/cerrar/" ><f7-icon f7="gear_fill"></f7-icon>  </a>
      <a  href="/instrucciones/"> <f7-icon f7="help_round_fill"></f7-icon> </a>
      <a class="link" fill raised href="/agregar/"><f7-icon f7="sort_up_round_fill"></f7-icon>  </a>
    </div>
  </div>
 
 <div class="page-content">
    
     <h1 class="text-align-center">Menú</h1>
      <f7-block>
         <p class="text-align-center"> <img data-src="https://i.ibb.co/4tsSV64/Logo-Santechile.png" width="90" height="90" class="lazy"></p>
      <f7-row>
       <f7-button   fill raised popup-open="#my-popup3"  class="col button button-small text-color-black" ><strong> Consultas médicas</strong> </f7-button>
      </f7-row>
    </f7-block>

    <f7-block>
        <p class="text-align-center" > <img data-src="https://cdn.pixabay.com/photo/2017/11/03/20/11/nurse-2915543_960_720.jpg" width="90" height="90"  class="lazy"></p>
      <f7-row>
        <f7-button  fill raised href='/examenes/'  class=" col button button-small text-color-black"> <strong>Exámenes</strong> </f7-button>  
      </f7-row>
    </f7-block>


      </div>
       </div>
       
          
    
    
  </f7-page>
</template>