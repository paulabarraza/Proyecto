// Import Vue
import Vue from 'vue';

// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import Framework7-Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.scss';

// Import App Component
import App from '../components/app.vue';

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

// Init App
new Vue({
  el: '#app',
  render: (h) => h(App),

  // Register App Component
  components: {
    app: App
  },
})
var sheet = app.sheet.create({
  content: '<div class="sheet-modal">...</div>',
  on: {
    opened: function () {
      console.log('Sheet opened')
    }
  }
})
var app = new Framework7();

var $$ = Dom7;

// DOM events for About popup
$$('.popup-about').on('popup:open', function (e, popup) {
  console.log('About popup open');
});
$$('.popup-about').on('popup:opened', function (e, popup) {
  console.log('About popup opened');
});
