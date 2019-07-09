<template>
  <f7-page no-toolbar no-navbar name="home">
           <p class="text-align-center"> <img data-src=https://i.ibb.co/F4481hS/logo2.png width="200" height="200" class="lazy"></p>
     <h1 class="text-align-center"><strong>Bienvenid@s a SanteChile </strong></h1>

   <f7-list form>
      <f7-list-input
        label="Correo electrónico"
        type="text"
        placeholder="Ingrese su correo electrónico"
        :value="username"
        @input="username = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        label="Contraseña"
        type="password"
        placeholder="Ingrese su contraseña"
        :value="password"
        @input="password = $event.target.value"
      ></f7-list-input>
    </f7-list>
    
         <f7-row>
            <f7-button fill raised href="/menu/" class=" text-align-center col button button-large text-color-black " ><strong>Ingresa</strong></f7-button>
          <f7-button fill raised href="/form/" class=" text-align-center col button button-large text-color-black " ><strong>Regístrate</strong></f7-button>
         </f7-row>


  </f7-page>
</template>

