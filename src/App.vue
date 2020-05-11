<template>
  <div id="app">
    <Header/>
    <characterDisplay/>
    <characterInput/>
  </div>
</template>

<script>
import characterDisplay from './components/characterDisplay.vue'
import characterInput from './components/characterInput.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    characterInput,
    characterDisplay,
    Header
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
