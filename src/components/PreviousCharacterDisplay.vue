<template>
  <div >
    <Header/>
      <p>Previous Character list</p>
      <h5 v-for="character in CharSheetList" :key="character.id"> 
        ID: {{character.id}}, Name: {{character.name}}
      </h5>
      <p> Please select the character ID below </p>
      <select v-model="id">
        <option v-for="id in CharSheetList" :key="id.id">
          {{id.id}}
        </option>
      </select> <br>
      <button v-on:click="Retrieve" id='retrieveCharacterButton'> Retrieve This Character From Datatabase </button>
      <button v-on:click="charUpdateDisplay"> Update This Character in the  Datatabase </button>
      <div v-if="this.charUpdateFlag">
        <CharacterUpdate v-bind:charSheet="this.updatingChar"/>
      </div>
      <br>
      <button v-on:click="Delete"> Delete This Character From Datatabase </button> 
      <div v-if="this.charDisplayFlag">
        <CharacterDisplay v-bind:charSheet='this.retrievedChar'/>
      </div>
    </div>
</template>

<script>
import CharacterDisplay from './CharacterDisplay.vue'
import CharacterUpdate from './CharacterUpdate.vue'
import gql from "graphql-tag"

export default {
  name: 'PreviousCharacterDisplay',
  apollo: {
    CharSheetList: gql`query {
      CharSheetList {
        name
        id
      }
    }`,
  },
  data() {
    return {
      char: '',
      character: '',
      charSheet: {},
      id: 0,
      retrievedChar: {},
      charUpdateFlag: false,
      charDisplayFlag: false
    };
  },
  components: {
    CharacterDisplay,
    CharacterUpdate
  },
  methods: {
  charUpdateDisplay: async function() {
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
      this.updatingChar = result.data.GetChar
      console.log( 'UPdatingChar',this. updatingChar)
      this.charUpdateFlag=true
      this.charDisplayFlag=false
    },
  Delete: async function() {
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
    console.log(this.charUpdateFlag, 'In Retrieve')
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
      console.log(this.retrievedChar)
      delete result.data.GetChar['__typename']
      delete result.data.GetChar['id']
      this.retrievedChar = result.data.GetChar
      this.charUpdateFlag=false
      this.charDisplayFlag=true

    }
  },
}
</script>