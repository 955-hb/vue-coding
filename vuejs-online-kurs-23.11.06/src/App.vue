<template>
  <div id="app">
    {{ firstName }},
    {{ age }},<br>
    {{ `${name} ${age}` }} <br>
    <u>{{ `${firstName} ${lastName} ${age}` }}</u> <br>
     
    {{'mein alter mal zwei ergibt: ' +  age *2 }} <hr>

    {{ fullName }} <br>
    {{ age >= 18 ? 'volljährig' : 'nicht volljährig' }} <hr>

    {{ Math.random() }}

  </div>
</template>

<script>


export default {
  name: 'App',
  data: () =>({
    firstName: 'Hannes',
    lastName: 'geht dich nichts an.',
    age: 33
  }),
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
