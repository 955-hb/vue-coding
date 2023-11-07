<template>
  <div id="app">
    {{ firstName }},
    {{ age }},<br>
    {{ `${name} ${age}` }} <br>
    <u>{{ `${firstName} ${lastName} ${age}` }}</u> <br>
     
    {{'mein alter mal zwei ergibt: ' +  age *2 }} <hr>

    {{ fullName }} <br>
    {{ age >= 18 ? 'volljährig' : 'nicht volljährig' }} 
    <hr><hr>

    <div class="age">
      {{ age }}
      <span v-if="age < 18"> Du bist unter 18!</span>
      <span v-else-if="age === 18">Glückwunsch, du bist Volljährig!</span>
      <span v-else>Du bist über 18 Jahre alt!</span>
    </div>
    <hr><hr>
    <div v-show="firstName === 'Hannes'">Hallo {{firstName}}!</div>

  </div>
</template>

<script>


export default {
  name: 'App',
  data: () =>({
    firstName: 'Hannes',
    lastName: 'geht dich nichts an.',
    age: 19
  }),
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
}
</script>

<style>
.age {
  border: 1px solid green;
  margin: 5px;
  padding: 10px;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
