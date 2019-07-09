
import HomePage from '../pages/home.vue';
import AboutPage from '../pages/about.vue';
import FormPage from '../pages/form.vue';
import Enfermedades from '../pages/enfermedades.vue';
import Menu from '../pages/menu.vue';
import Examenes from '../pages/examenes.vue';
import PartesCabeza from '../pages/partes_cabeza.vue';
import Parte1Cabeza from '../pages/parte1_cabeza.vue';
import Parte2Cabeza from '../pages/parte2_cabeza.vue';
import PartesBrazo from '../pages/partes_brazo.vue';
import Parte1Brazo from '../pages/parte1_brazo.vue';
import Parte2Brazo from '../pages/parte2_brazo.vue';
import Agregar from '../pages/agregar.vue';
import Instrucciones from '../pages/instrucciones.vue';
import Cerrar from '../pages/cerrar.vue';
import LeftPage2 from '../pages/left-page-2.vue';
import DynamicRoutePage from '../pages/dynamic-route.vue';
import RequestAndLoad from '../pages/request-and-load.vue';
import NotFoundPage from '../pages/404.vue';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/menu/',
    component: Menu,
  },
  {
    path: '/examenes/',
    component: Examenes,
  },
  {
    path: '/agregar/',
    component: Agregar,
  },
  {
    path: '/cerrar/',
    component: Cerrar,
  },
  {
    path: '/instrucciones/',
    component: Instrucciones,
  },
  {
    path: '/partes_cabeza/',
    component: PartesCabeza,
  },
  {
    path: '/parte2_cabeza/',
    component: Parte2Cabeza,
  },
  {
    path: '/parte1_cabeza/',
    component: Parte1Cabeza,
  },
 
  {
    path: '/partes_brazo/',
    component: PartesBrazo,
  },
  {
    path: '/parte1_brazo/',
    component: Parte1Brazo,
  },
  {
    path: '/parte2_brazo/',
    component: Parte2Brazo,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/enfermedades/',
    component: Enfermedades,
  },
  {
    path: '/left-page-2/',
    component: LeftPage2,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
