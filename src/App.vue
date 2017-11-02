<template>
  <div id="app">
  </div>
</template>

<script>
import counterTest from './components/counterTest'
import venue from './components/venue'

export default {
  name: 'app',
  components: {
    counterTest,
    venue
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
