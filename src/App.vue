<template>
  <div id="app">
    <Header/>
      <button v-on:click="prevChar"> Previous Characters </button> 
      <button v-on:click="newChar"> New Character </button> 
    <div v-if="this.prevCharVal">
      <PreviousCharacterDisplay/>
    </div>
    <div v-if="this.newCharVal">
      <NewCharacterDisplay/>
    </div>
  </div>
</template>

<script>
import PreviousCharacterDisplay from './components/PreviousCharacterDisplay.vue'
import NewCharacterDisplay from './components/NewCharacterDisplay.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
    components: {
      Header,
      PreviousCharacterDisplay,
      NewCharacterDisplay
    },
  data() {
    return {
      prevCharVal:false,
      newCharVal:false,
    };
  },
  methods: {
    prevChar: function () {
      this.prevCharVal = !this.prevCharVal
    },
    newChar: function () {
      this.newCharVal = !this.newCharVal
    },
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
  background: antiquewhite
}
</style>
