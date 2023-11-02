
Vue.createApp({
  data() {
    return {
      headline: "Attribute Binding is awesome",
      imageAttrs: {
        src: "https://picsum.photos/id/237/200/300",
        alt: "A cute dog"
      }
    };
  }
}).mount("#app");

/*
const app = Vue.createApp({
  data() {
    return {
      width: 200,
      height: 200,
    };
  }
}).mount("#app");
*/