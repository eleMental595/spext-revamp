import Vue from "vue";
import Router from "vue-router";
import MusicLibrary from "./MusicLibrary/MusicLibrary.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "musicLibrary",
      component: MusicLibrary
    },
    {
      path: "/media",
      name: "media",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./Media/Media.vue")
    }
  ]
});
