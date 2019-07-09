<template>
  <f7-page name="parte2_cabeza">
    <!-- Top Navbar -->
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
    <h1 class="text-align-center"> Ojos</h1>
<p class="text-align-center" > <img data-src=https://cdn.pixabay.com/photo/2015/10/28/15/19/eye-1010677_960_720.jpg width="150" height="150"  class="lazy"></p>
    <!-- Searchbar with auto init -->
        <form class="searchbar">
          <div class="searchbar-inner">
            <div class="searchbar-input-wrap">
              <input type="search" placeholder="Buscar">
              <i class="searchbar-icon"></i>
              <span class="input-clear-button"></span>
            </div>
            <span class="searchbar-disable-button if-not-aurora">Cancelar</span>
          </div>
        </form>
   
        <div class="block">
          <!-- In data-sheet attribute we specify CSS selector of sheet we need to open-->
          <p><a class="col button button-small text-color-black button-fill sheet-open" href="#" data-sheet=".my-sheet"><strong>Mwen wè twoub</strong></a></p>
          <!-- Button to close sheet-->
         
          <p><a class="col button button-small text-color-black button-fill sheet-open" href="#" data-sheet=".my-sheet-top">
<strong>Mwen te gen yon stye</strong></a></p>
          <!-- Button to open swipe-to-close sheet-->
           <f7-row>
        <f7-col width="100"><f7-button  fill raised href='/agregar/'  class="col button button-small text-color-black button-fill"><strong>Agregar</strong>  </f7-button></f7-col>   
      </f7-row>
        </div>
 
  <!-- Default bottom sheet -->
  <div class="sheet-modal my-sheet">
    <div class="toolbar">
      <div class="toolbar-inner">
        <div class="left"></div>
        <div class="right"><a class="col button button-small text-color-black button-fill sheet-close" href="#">hecho</a></div>
      </div>
    </div>
    <div class="sheet-modal-inner">
      <div class="block">
        <h1>tradiksyon an panyòl:</h1>
        <h2>Estoy viendo borroso</h2>
        <a  class="link"><f7-icon f7="volume_fill"></f7-icon> </a>
      </div>
    </div>
  </div>
  <div class="sheet-modal my-sheet-top">
    <div class="toolbar">
      <div class="toolbar-inner">
        <div class="left"></div>
        <div class="right"><a class="col button button-small text-color-black button-fill sheet-close" href="#">hecho</a></div>
      </div>
    </div>
    <div class="sheet-modal-inner">
      <div class="block">
        <h1>tradiksyon an panyòl:</h1>
        <h2>Me salió un orzuelo</h2>
         <a  class="link"><f7-icon f7="volume_fill"></f7-icon> </a>
      </div>
    </div>
  </div>
  </f7-page>
</template>