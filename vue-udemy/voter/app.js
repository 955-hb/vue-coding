// Hello Hannes

const app = Vue.createApp({
  // optionen
  data: function () {
    return {
      submissions: submissions, //aus seed.js
    };
  },
});

// liefert die Instanz zur Root-Component zurück
const vm = app.mount("#app"); //vm = viewModel
