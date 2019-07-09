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
    
    
       <h1 class="text-align-center">Colaborar</h1>
      <p class="text-align-center"> <img data-src="https://image.freepik.com/vector-gratis/fondo-equipo-conectando-puzzle_23-2148078063.jpg" width="150" height="150" class="lazy"></p>  
    <f7-block class="strong">
    

       <f7-list form>
      <f7-list-input
        label="Díganos algún examen que nos faltó considerar"
        type="text"
        placeholder="Escriba el nombre del examen "
        :value="contenido"
        @input="contenido = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        label="Díganos alguna dolencia que desee agregar"
        type="text"
        placeholder="Escriba dolencia"
        :value="contenido"
        @input="contenido = $event.target.value"
      ></f7-list-input>
       <f7-list-input
        label="Seleccione parte del cuerpo en que se localiza dolencia"
        type="select"
      >
      <option>Seleccione</option>
      <option>Otra</option>
        <option>Cabeza</option>
        <option>Hombro</option>
      </f7-list-input>

    </f7-list>
      <f7-row tag="p">
        <f7-button fill raised class="col button button-small text-color-black" @click="openConfirm" >Agregar</f7-button>
      </f7-row>  
    </f7-block>   
    
  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7BlockTitle, f7Block, f7Button, f7Row } from 'framework7-vue';
  export default {
    components: {
      f7Navbar,
      f7Page,
      f7BlockTitle,
      f7Block,
      f7Button,
      f7Row,
    },
    methods: {
      
      openConfirm() {
        const app = this.$f7;
        app.dialog.confirm('¿Estás seguro que deseas agregar?', () => {
          app.dialog.alert(' ¡Agregada!');
        });
      },
    
      
      
    },
  };
</script>