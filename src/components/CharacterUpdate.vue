<template>
  <div>
    <h1>Character Update</h1>
    <div>
      Character Name:
    <input v-model="charName"> 
    </div>
    <div> Character Abilities:
      <br> Previous Strength Score: {{this.charSheet.str}}    
      <br> New Strength Score: <input v-model="charStr"/> 
      Strength Score: {{charStr}} <br>
      <br> Previous Dexterity Score: {{this.charSheet.dex}}   
      <br> New Dexterity Score: <input v-model="charDex"/> 
      Dexterity Score: {{charDex}} <br>
      <br> Previous Constitution Score: {{this.charSheet.con}}    
      <br> New Constitution Score: <input v-model="charCon"/> 
      Constitution Score: {{charCon}} <br>
      <br> Previous Intelligence Score: {{this.charSheet.int}}    
      <br> New Intelligence Score: <input v-model="charInt"/> 
      Intelligence Score: {{charInt}} <br>
      <br> Previous Wisdom Score: {{this.charSheet.wis}}    
      <br> New Wisdom Score: <input v-model="charWis"/> 
      Wisdom Score: {{charWis}} <br>
      <br> Previous Charisma Score: {{this.charSheet.cha}}    
      <br> New Charisma Score: <input v-model="charCha"/> 
      Charisma Score: {{charCha}} <br>
  </div>
  <button v-on:click="charUpdate(charName, charRace, charStr, charDex, charCon, charInt, charWis, charCha)" id="Update"> Update character in Database </button> 
  </div>
</template>

<script>
import gql from "graphql-tag"


export default {
  name: "characterUpdate",
  data: () => {
    return {
      charName: "",
      charRace: "",
      charStr: 10,
      charDex: 10,
      charCon: 10,
      charInt: 10,
      charWis: 10,
      charCha: 10,
    }
  },
  mounted() {
    this.charName = this.charSheet.name
    this.charRace = this.charSheet.race
    this.charStr = this.charSheet.str
    this.charDex = this.charSheet.dex
    this.charCon = this.charSheet.con
    this.charInt = this.charSheet.int
    this.charWis = this.charSheet.wis
    this.charCha = this.charSheet.cha,
    this.charId = this.charSheet.id
  },
  props: {
  charSheet: Object,
  },
  methods: {
    reset: function() {
      this.charStr= this.charSheet.str,
      this.charDex= this.charSheet.dex,
      this.charCon= this.charSheet.con,
      this.charInt= this.charSheet.int,
      this.charWis= this.charSheet.wis,
      this.charCha= this.charSheet.cha
      this.charName= this.charSheet.name,
      this.charRace= this.charSheet.race
    },
    charUpdate: async function() {
      console.log('In CharUpdate')
      await this.$apollo.mutate({
      mutation: gql`mutation ($id:ID!,$name: String!,$race:String!,$str:Int!,$dex:Int!,$con:Int!,$int:Int!,$wis:Int!,$cha:Int!) {
        CharUpdate(id:$id, name: $name, race:$race, str:$str, dex:$dex, con:$con, int:$int, wis:$wis, cha:$cha){
          name
        }}`,
      variables: {
        id: this.charId,
        name: this.charName,
        race: this.charRace,
        str: parseInt(this.charStr),
        dex: this.charDex,
        con: this.charCon,
        int: this.charInt,
        wis: this.charWis,
        cha: this.charCha
        } 
      })
      console.log('In CharUpdate')
    },
  }
};

</script>

<style scoped>
</style>