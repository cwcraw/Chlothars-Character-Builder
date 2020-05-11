<template>
  <div id="app">
    <Header/>
    <characterInput  v-on:submit="submit"/>
    <characterDisplay v-bind:char_sheet='this.char_sheet'/>
  </div>
</template>

<script>
import characterDisplay from './components/characterDisplay.vue'
import characterInput from './components/characterInput.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
   data() {
    return {
      char_sheet: {},
    };
  },
  components: {
    characterInput,
    characterDisplay,
    Header
  },
  methods: {
  submit: function (char_name) {
    this.char_sheet = {
      name: char_name
    }
    console.log(this.char_sheet)
    }
  },
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
