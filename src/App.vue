<template>
  <div id="app">
    <Header/>
    <select class="char" v-model="char">
        <option value disabled>Returning</option>
        <option v-for="char in CharSheets" :key="char.name">
          {{ char.name }}
        </option>
      </select>
    <characterInput  v-on:submit="submit"/>
    <characterDisplay v-bind:char_sheet='this.char_sheet'/>
  </div>
</template>

<script>
import characterDisplay from './components/characterDisplay.vue'
import characterInput from './components/characterInput.vue'
import Header from './components/Header.vue'
import gql from "graphql-tag"

export default {
  name: 'App',
  apollo: {
    CharSheets: gql`query {
    CharSheets {
      name
      str
    }
    }`,
  },
  data() {
    return {
      char: '',
      char_sheet: {},
    };
  },
  components: {
    characterInput,
    characterDisplay,
    Header
  },
  methods: {
  submit: function (char_name, char_race,char_str,char_dex,char_con,char_int,char_wis,char_cha) {
    this.char_sheet = {
      name: char_name,
      race: char_race,
      str: char_str,
      dex: char_dex,
      con: char_con,
      int: char_int,
      wis: char_wis,
      cha: char_cha,
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
