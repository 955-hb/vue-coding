<template>
  <div>
    <h1>Lichtschalter-App</h1>
    <p>Beleuchtung: {{ status }}</p>
    <button @click="toggleLight">Lichtschalter</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLightOn: false,
    };
  },
  computed: {
    status() {
      return this.isLightOn ? 'An' : 'Aus';
    },
  },
  methods: {
    toggleLight() {
      this.isLightOn = !this.isLightOn;
    },
  },
};
</script>

<style scoped>
/* Füge hier dein CSS hinzu, falls du möchtest */
</style>
