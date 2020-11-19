import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyDAaBU1h65MdC7cJJyDsi-uqp3r3J1abkk",
  authDomain: "vue-calendar-9cf7d.firebaseapp.com",
  databaseURL: "https://vue-calendar-9cf7d.firebaseio.com",
  projectId: "vue-calendar-9cf7d",
  storageBucket: "vue-calendar-9cf7d.appspot.com",
  messagingSenderId: "1023812069570",
  appId: "1:1023812069570:web:39767a6b0a588d02f8f35b",
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
