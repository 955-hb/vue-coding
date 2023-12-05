<template>
  <div class="counter-squared">
      {{ $store.state.counter }}
      <sup>2</sup> = 
      <b class="resultSquare">{{ $store.getters.counterSquared }}</b>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>