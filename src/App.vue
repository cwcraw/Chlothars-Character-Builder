<template>
  <div id="app">
    <Header/>
      <button v-on:click="prevChar"> Previous Characters </button> 
      <button v-on:click="newChar"> New Character </button> 
    <div v-if="this.prevCharVal">
      <p>Previous Character list</p>
      <h5 v-for="character in CharSheets" :key="character.id"> 
        ID: {{character.id}}, Name: {{character.name}}
      </h5>
      <p> Please select the character ID below </p>
      <select v-model="id">
        <option v-for="id in CharSheets" :key="id.id">
          {{id.id}}
        </option>
      </select> <br>
      <button v-on:click="Delete"> Delete This Character From Datatabase </button> 
      <button v-on:click="Retrieve"> Retrieve This Character From Datatabase </button>
      <RetrievedDisplay v-bind:char_sheet='this.retrievedChar'/>
    </div>
    <div v-if="this.newCharVal">
      <characterInput  v-on:submit="display" id = "charInput"/>
      <characterDisplay v-bind:char_sheet='this.char_sheet'/>
      <button v-on:click="Save"> Save This Character To Datatabase </button> 
    </div>
  </div>
</template>

<script>
import characterDisplay from './components/characterDisplay.vue'
import RetrievedDisplay from './components/RetrievedDisplay.vue'
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
  },
  data() {
    return {
      char: '',
      character: '',
      char_sheet: {},
      id: 0,
      prevCharVal:false,
      newCharVal:false,
      retrievedChar: {}
    };
  },
  components: {
    characterInput,
    characterDisplay,
    Header,
    RetrievedDisplay
  },
  methods: {
    prevChar: function () {
      console.log(this.prevCharVal)
      this.prevCharVal = !this.prevCharVal
    },
    newChar: function () {
      console.log(this.newCharVal)
      this.newCharVal = !this.newCharVal
    },
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
  Delete: async function() {
    console.log(this.id)
    await this.$apollo.mutate({
      mutation: gql`mutation ($id:ID!) {
        Delete(id:$id) 
      }`,
    variables: {
      id: this.id
    }
    })
  },
  Retrieve: async function() {
    console.log(this.id)
    let result = await this.$apollo.query({
        query: gql`query ($id:ID!) {
          GetChar(id: $id) {
            id
            name
            race
            str
            dex
            con
            int
            wis
            cha
          }
          }`,
          variables: {
            id: this.id
          }
        })
      delete result.data.GetChar['__typename']
      delete result.data.GetChar['id']
      this.retrievedChar = result.data.GetChar
      console.log(this.retrievedChar)
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
