import Vue from "vue";
import VueRouter from "vue-router";
import AddFiles from "./components/AddFiles/AddFiles";
import SpextDocs from "./components/SpextDocs/SpextDocs";
import Sounds from "./components/Sounds/Sounds";
import UploadMedia from "./components/UploadMedia/UploadMedia";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/addfile",
      name: "addfile",
      component: AddFiles,
      children: [
        {
          path: "spextdocs",
          name: "spextdocs",
          component: SpextDocs
        },
        {
          path: "sounds",
          name: "sounds",
          component: Sounds
        },
        {
          path: "uploadmedia",
          name: "uploadmedia",
          component: UploadMedia
        }
      ]
    }
  ]
});
export default router;
