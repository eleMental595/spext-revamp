import Vue from "vue";
import VueRouter from "vue-router";
import AddFiles from "./components/AddFiles/AddFiles";
import SpextDocs from "./components/SpextDocs/SpextDocs";
import Sounds from "./components/Sounds/Sounds";
import MusicLibrary from "./components/Sounds/MusicLibrary/MusicLibrary";
import Media from "./components/Sounds/Media/Media";
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
          component: Sounds,
          children: [
            {
              path: "musiclibrary",
              name: "musiclibrary",
              component: MusicLibrary
            },
            {
              path: "media",
              name: "media",
              component: Media
            }
          ]
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
