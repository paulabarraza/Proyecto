<template>
  <f7-page name="examenes">
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
    <!-- Page content-->

    <h1 class="text-align-center">Instrucciones para exámenes</h1>
   <!-- Searchbar with auto init -->
      <Searchbar
  disableLinkText="Cancel"
  placeholder="Search in items"
  clearButton={true}
></Searchbar>
<form class="searchbar">
  <div class="searchbar-inner">
    <div class="searchbar-input-wrap">
      <input type="search" placeholder="Search">
      <i class="searchbar-icon"></i>
      <span class="input-clear-button"></span>
    </div>
    <span class="searchbar-disable-button">Cancelar</span>
  </div>
</form>
        <div class="block">
          <!-- In data-sheet attribute we specify CSS selector of sheet we need to open-->
          
          <!-- Button to close sheet-->
         <p class="text-align-center" > <img data-src="https://image.freepik.com/foto-gratis/doctora-bonita-posando-mientras-haciendo-ecografia_56854-2364.jpg" width="150" height="100"  class="lazy"></p>
          <p ><a class="col button button-small text-color-black button-fill sheet-open" href="#" data-sheet=".my-sheet-top">
<strong>ultrason nan vant / Ecografía abdominal</strong></a></p>
<p class="text-align-center" > <img data-src="https://image.freepik.com/foto-gratis/afro-paciente-dentro-exploracion-tomografia-exploracion_99043-2939.jpg" width="150" height="100"  class="lazy"></p>
          <p ><a class="col button button-small text-color-black button-fill sheet-open" href="#" data-sheet=".my-sheet-top">
<strong>Eskanè / Escáner </strong></a></p>
          <!-- Button to open swipe-to-close sheet-->
       
        
      <f7-row>
      <f7-button  fill raised href='/agregar/'  class="col button button-small text-color-black"><strong>
Ou vle ajoute yon egzamen?</strong> </f7-button> 
      </f7-row>
     </div>

   

  <!-- Default bottom sheet -->
  <div class="sheet-modal my-sheet">
    <div class="toolbar">
      <div class="toolbar-inner">
        <div class="left"></div>
        <div class="right"><a class="col button button-small text-color-black button-fill sheet-close" href="#">Hecho</a></div>
      </div>
    </div>
    <div class="sheet-modal-inner">
      <div class="block">
        <h3>Enstriksyon:</h3>
       
      <p><strong> Duration:</strong> se tès la fè nan apeprè 15 minit.</p>
      <p><strong>Èske li nesesè pou yo akonpaye?:</strong> Li pa nesesè pou yo akonpaye yo</p>
      <p><strong>Manje:</strong> li nesesè yo dwe jèn 8 èdtan anvan tès la.</p>
      </div>
    </div>
  </div>
  <div class="sheet-modal my-sheet-top">
    <div class="toolbar">
      <div class="toolbar-inner">
        <div class="left"></div>
        <div class="right"><a class="col button button-small text-color-black button-fill sheet-close" href="#">Hecho</a></div>
      </div>
    </div>
    <div class="sheet-modal-inner">
      <div class="block">
        <h3>Enstriksyon:</h3>
      <p><strong> Duration:</strong> se tès la fè nan apeprè 20 minit.</p>
      <p><strong>Èske li nesesè pou yo akonpaye?:</strong> Li pa nesesè pou yo akonpaye yo</p>
      <p><strong>Manje:</strong> 
An jeneral li nesesè pou ale sou yon lestomak vid nan ka ou yo ba ou yon kontras..</p>
      </div>
    </div>
  </div>
 
     
  </f7-page>
</template>