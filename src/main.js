// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import vueSmoothScroll from "vue2-smooth-scroll";
import DefaultLayout from "~/layouts/Default";
import PageSection from "~/components/PageSection";
import "font-awesome/css/font-awesome.css";
import "~/assets/sass/main.scss";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(vueSmoothScroll);
  Vue.component("Layout", DefaultLayout);
  Vue.component("PageSection", PageSection);
}
