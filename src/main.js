// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";
// import ElementUI from 'element-ui' // element-ui的全部组件
// import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/display.css'

// import VueParticles from 'vue-particles'

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
// app.use(VueParticles);
app.mount("#app");
