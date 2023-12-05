<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <counter />
    <counter-squared />
    <buttons />
    <colorCode />
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {
    counter: require("@/components/counter.vue").default,
    counterSquared: require("@/components/counter-squared.vue").default,
    buttons: require("@/components/button.vue").default,
    colorCode: require("@/components/color-code.vue").default,
  },
};
</script>

<style>
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}

.resultSquare {
  text-decoration: underline;
  color: red;
}
</style>
