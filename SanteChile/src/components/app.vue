<template>
<f7-app :params="f7params" >
  <!-- Status bar overlay for fullscreen mode-->
  <f7-statusbar></f7-statusbar>

  <!-- Left panel with cover effect when hidden -->
 


 


  <!-- Your main view, should have "view-main" class -->
  <f7-view main class="safe-areas" url="/"></f7-view>


  <!-- Popup -->
  <f7-popup id="my-popup">
    <f7-view>
      <f7-page>
        <f7-navbar class ="strong" title="Te damos la bienvenida">
          <f7-nav-right>
            <f7-button  fill raised href='/menu/' class= "text-align-center col button button-small text-color-black" >Cerrar</f7-button>
          </f7-nav-right>
        </f7-navbar>
      
         <h1 class=" text-align-center ">SanteChile</h1>
        <div class="margin-left text-align-justify margin-right "><strong> <h2> Será su mejor herramienta para comunicarse en el área de la salud en Chile.</h2>
   <h2>Aquí podrá acceder a una variada información médica, ya sea una consulta  o un  examen.</h2></strong>
         <p class="text-align-center"> <img data-src="https://cdn.pixabay.com/photo/2017/06/30/09/24/crowd-2457730_960_720.png" width="300" height="200" class="lazy"></p>
</div>

      </f7-page>
    </f7-view>
  </f7-popup>

    <f7-popup id="my-popup2">
    <f7-view>
      <f7-page>
        <f7-navbar  class="text-align-center" title="¡Regresa pronto!">
        
        </f7-navbar>
        <f7-block>
              <p class="text-align-center"> <img data-src=https://image.freepik.com/vector-gratis/cerebro-sombrero-gafas-diciendo-adios-maleta-ilustracion-vectorial-plana_98292-3106.jpg width="200" height="200" class="lazy"></p>
         <f7-button  fill raised href='/'  class="col button button-small text-color-black"><strong> Salir</strong></f7-button>  
        </f7-block>
      </f7-page>
    </f7-view>
  </f7-popup>
   <f7-popup id="my-popup3">
    <f7-view>
      <f7-page>
       <f7-navbar> <div class="title sliding"><strong>SanteChile</strong></div>
        
        </f7-navbar>
         <h1  class="text-align-center">¿Desea permitir el acceso a audio?</h1>
    <f7-block>
       <f7-row >
        <f7-button  fill raised href='/enfermedades/'  class="col button button-small text-color-black"><strong> No</strong></f7-button>  
        <f7-button fill raised href="/enfermedades/" class=" text-align-center col button button-small text-color-black " ><strong>Si</strong></f7-button>
    
      </f7-row> 
    </f7-block>
      </f7-page>
    </f7-view>
  </f7-popup>
  
 
  
 
  <f7-login-screen id="my-login-screen">
    <f7-view>
      <f7-page login-screen>
        <f7-login-screen-title>Login</f7-login-screen-title>
        <f7-list form>
          <f7-list-input
            type="text"
            name="username"
            placeholder="Your username"
            :value="username"
            @input="username = $event.target.value"
          ></f7-list-input>
          <f7-list-input
            type="password"
            name="password"
            placeholder="Your password"
            :value="password"
            @input="password = $event.target.value"
          ></f7-list-input>
        </f7-list>
        <f7-list>
          <f7-list-button title="Sign In" login-screen-close @click="alertLoginData"></f7-list-button>
          <f7-block-footer>
            Some text about login information.<br>Click "Sign In" to close Login Screen
          </f7-block-footer>
        </f7-list>
      </f7-page>
    </f7-view>
  </f7-login-screen>
</f7-app>
</template>
<script>
  import cordovaApp from '../js/cordova-app.js';
  import routes from '../js/routes.js';
  import { f7Navbar, f7Page, f7BlockTitle, f7Block, f7Button, f7Row } from 'framework7-vue';

  export default {
    data() {
      return {
        // Framework7 Parameters
        f7params: {
          id: 'io.framework7.santechile', // App bundle ID
          name: 'SanteChile', // App name
          theme: 'auto', // Automatic theme detection
          // App root data
          data: function () {
            return {
              user: {
                firstName: 'John',
                lastName: 'Doe',
              },

            };
          },

          // App routes
          routes: routes,
          // Enable panel left visibility breakpoint
          panel: {
            leftBreakpoint: 960,
          },


          // Input settings
          input: {
            scrollIntoViewOnFocus: this.$device.cordova && !this.$device.electron,
            scrollIntoViewCentered: this.$device.cordova && !this.$device.electron,
          },
          // Cordova Statusbar settings
          statusbar: {
            overlay: this.$device.cordova && this.$device.ios || 'auto',
            iosOverlaysWebView: true,
            androidOverlaysWebView: false,
          },
        },

        // Login screen data
        username: '',
        password: '',
      }
    },
    methods: {
      alertLoginData() {
        this.$f7.dialog.alert('Username: ' + this.username + '<br>Password: ' + this.password);
      }
    },
    mounted() {
      this.$f7ready((f7) => {
        // Init cordova APIs (see cordova-app.js)
        if (f7.device.cordova) {
          cordovaApp.init(f7);
        }
        // Call F7 APIs here
      });
    }
  }
 
</script>
