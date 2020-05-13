<template>
  <div id="app">
    <Header/>
    <select class="char" v-model="character" v-on:change="GetCharQ">
        <option value disabled>Returning</option>
        <option v-for="character in CharSheets" :key="character.id">
          {{character.id}}. {{ character.name }}
        </option>
      </select>
    <characterInput  v-on:submit="display" id = "charInput"/>
    <characterDisplay v-bind:char_sheet='this.char_sheet'/>
    <button v-on:click="Save"> Save This Character To Datatabase </button> 
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
        id
      }
    }`,
      GetCharQ: { 
        query: gql`query
          GetChar($id:Int) {
            id
            name
            race
            str
            dex
            con
            int
            wis
            cha
          }`,
          variables: {
            id: this
          }
        }
      
  },
  data() {
    return {
      char: '',
      character: '',
      char_sheet: {},
    };
  },
  components: {
    characterInput,
    characterDisplay,
    Header
  },
  methods: {
  // GetChar: async function() {
  //   console.log(this.character, typeof this.character)
  //   this.char_id = this.character.split('.')[0]
  // },
  Save: async function() {
    if(this.char_name === undefined) {
      await document.getElementById("Display").click()
    }
    await this.$apollo.mutate({
      mutation: gql`mutation ($name: String!,$race:String!,$str:Int!,$dex:Int!,$con:Int!,$int:Int!,$wis:Int!,$cha:Int!) {
      NewCharSheet(name: $name, race:$race, str:$str, dex:$dex, con:$con, int:$int, wis:$wis, cha:$cha){
        name
      }}`,
    variables: {
      name: this.char_name,
      race: this.char_race,
      str: this.char_str,
      dex: this.char_dex,
      con: this.char_con,
      int: this.char_int,
      wis: this.char_wis,
      cha: this.char_cha
      }
    })
  },
  display: function (char_name, char_race,char_str,char_dex,char_con,char_int,char_wis,char_cha) {
    this.char_name = char_name 
    this.char_race = char_race
    this.char_str = char_str
    this.char_dex = char_dex
    this.char_con = char_con
    this.char_int = char_int
    this.char_wis = char_wis
    this.char_cha = char_cha
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
