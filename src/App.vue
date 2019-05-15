<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelpMeRemember msg="Movies"/>
  </div>
</template>

<script>
import HelpMeRemember from './components/HelpMeRemember.vue'

export default {
  name: 'app',
  components: {
    HelpMeRemember
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
