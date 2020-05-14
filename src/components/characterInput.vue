<template>
  <div>
    <h1>New Character Input</h1>
    <div>
      Character Name:
    <input v-model="charName"> 
    </div>
    <div>
      Setting:
      <select class="setting" v-model="setting" v-on:change="setPoints">
        <option v-for="setting in settingList" :key="setting.id">
          {{ setting }}
        </option>
      </select>
    </div>
    <div>
      Initial Ability Points: {{abilityPoints}} <br>
      Remaining Ability Points: {{remAbilityPoints}}
    </div>
    <div>
      Character Race:
      <select class="race" v-model="charRace">
        <option v-for="race in RaceList" :key="race.id">
          {{ race }}
        </option>
      </select>
    <div v-if="this.charRace==='Human'">
      <p> Humans get a +2 Bonus to any 1 stat, please select the stat and see the bonus upon changing the value. </p>
       <select class="race" v-model="extraPoint">
        <option v-for="abl in AblList" :key="abl.id">
          {{ abl }}
        </option>
      </select>
    </div>
    <div v-if="this.charRace==='Gnome'">
      <p> Gnomes have a +2 bonus to Cha and Con but a -2 penalty to Str.</p>
    </div>
    <div v-if="this.charRace==='Dwarf'">
      <p> Dwarfs have a +2 bonus to Wis and Con, but a -2 penalty to Cha.  </p>
    </div>
    <div v-if="this.charRace==='Elf'">
      <p> Elves have a +2 bonus to Int and Dex, but a -2 penalty to Con.  </p>
    </div>
    </div>
    <div> Character Abilities:
      <br> Strength Selection    
      <select class="Abl_score" v-model="Str" v-on:change="calcStr">
        <option v-for="point in pointList" :key="point.id">
          {{ point }}
        </option>
      </select>
      Strength Score: {{charStr}} <br>
      <br> Dexterity Selection    
      <select class="Abl_score" v-model="Dex" v-on:change="calcDex">
        <option v-for="point in pointList" :key="point.id">
          {{ point }}
        </option>
      </select>
      Dexterity Score: {{charDex}} <br>
      <br> Constitution Selection    
      <select class="Abl_score" v-model="Con" v-on:change="calcCon">
        <option v-for="point in pointList" :key="point.id">
          {{ point }}
        </option>
      </select>
      Constitution Score: {{charCon}} <br>
      <br> Intelligence Selection    
      <select class="Abl_score" v-model="Int" v-on:change="calcInt">
        <option v-for="point in pointList" :key="point.id">
          {{ point }}
        </option>
      </select>
      Intelligence Score: {{charInt}} <br>
      <br> Wisdom Selection    
      <select class="Abl_score" v-model="Wis" v-on:change="calcWis">
        <option v-for="point in pointList" :key="point.id">
          {{ point }}
        </option>
      </select>
      Wisdom Score: {{charWis}} <br>
      <br> Charisma Selection    
      <select class="Abl_score" v-model="Cha" v-on:change="calcCha">
        <option v-for="point in pointList" :key="point.id">
          {{ point }}
        </option>
      </select>
      Charisma Score: {{charCha}} <br>
  </div>
    <button v-on:click="$emit('submit', charName, charRace, charStr, charDex, charCon, charInt, charWis, charCha)" id="Display"> Update Display </button> 
    <button v-on:click="reset"> New Character </button> 
  </div>
</template>

<script>
export default {
  name: "characterInput",
  data: () => {
    return {
      RaceList: ["Human","Gnome","Dwarf","Elf"],
      AblList: ["Str", "Dex", "Con", "Int", "Wis","Cha"],
      extraPoint:"",
      pointList: [-4,-2,-1,0,1,2,3,5,7,10,13,17],
      pointObj: {"-4":7,"-2":8,"-1":9,"0":10,"1":11,"2":12,"3":13,"5":14,"7":15,"10":16,"13":17,"17":18},
      scoreObj: {"7":-4,"8":-2,"9":-1,"10":0,"11":1,"12":2,"13":3,"14":5,"15":7,"16":10,"17":13,"18":17},
      settingList:["Low Fantasy","Standard Fantasy","High Fantasy", "Epic Fantasy"],
      settingObj:{"Low Fantasy":10,"Standard Fantasy":15,"High Fantasy":20, "Epic Fantasy":25},
      setting: 0,
      abilityPoints: 15,
      remAbilityPoints: 15,
      charName: "",
      charRace: "",
      charStr: 10,
      charDex: 10,
      charCon: 10,
      charInt: 10,
      charWis: 10,
      charCha: 10,
      rawStr: 10,
      rawDex: 10,
      rawCon: 10,
      rawInt: 10,
      rawWis: 10,
      rawCha: 10,
      Str: 0,
      Dex: 0,
      Int: 0,
      Wis: 0,
      Con: 0,
      Cha: 0,
    }
  },
  methods: {
    reset: function() {
      this.charStr= 10
      this.charDex= 10
      this.charCon= 10
      this.charInt= 10
      this.charWis= 10
      this.charCha= 10
      this.charName= ""
      this.charRace= ""
    },
    setPoints: function() {
      this.abilityPoints=this.settingObj[this.setting]
      this.remAbilityPoints=this.abilityPoints
    },
    calcStr: function() {
      this.remAbilityPoints = this.remAbilityPoints+this.scoreObj[this.rawStr]-this.Str
      let output = this.pointObj[this.Str]
      if(isNaN(output) ){ output = 0}
      this.rawStr = output
      if (this.charRace === 'Gnome') {
        output = output-2
      }
      if(this.charRace === 'Human' && this.extraPoint === "Str") {
        output = output + 2
      }
      this.charStr = output
      return this.charStr
    },
    calcDex: function() {
      this.remAbilityPoints = this.remAbilityPoints+this.scoreObj[this.rawDex]-this.Dex
      let output = this.pointObj[this.Dex]
      if(isNaN(output) ){ output = 0}
      this.rawDex = output
      if(this.charRace === 'Elf'){
        output=output+2
      }
      if(this.charRace === 'Human' && this.extraPoint === "Dex") {
        output = output + 2
      }
      this.charDex = output
      return this.charDex
    },
    calcCon: function() {
      this.remAbilityPoints = this.remAbilityPoints+this.scoreObj[this.rawCon]-this.Con
      let output = this.pointObj[this.Con]
      if(isNaN(output) ){ output = 0}
      this.rawCon = output
      if(this.charRace === 'Elf'){
        output=output-2
      } else if (this.charRace === 'Dwarf') {
        output = output+2
      } else if (this.charRace === 'Gnome') {
        output = output+2
      }
      if(this.charRace === 'Human' && this.extraPoint === "con") {
        output = output + 2
      }      
      this.charCon = output
      return this.charCon
    },
    calcInt: function() {
      this.remAbilityPoints = this.remAbilityPoints+this.scoreObj[this.rawInt]-this.Int
      let output = this.pointObj[this.Int]
      if(isNaN(output) ){ output = 0}
      this.rawInt = output
      if(this.charRace === 'Elf'){
        output=output+2
      }
      if(this.charRace === 'Human' && this.extraPoint === "Int") {
        output = output + 2
      }    
      this.charInt = output
      return this.charInt
    },
    calcWis: function() {
      this.remAbilityPoints = this.remAbilityPoints+this.scoreObj[this.rawWis]-this.Wis
      let output = this.pointObj[this.Wis]
      if(isNaN(output) ){ output = 0}
      this.rawWis = output
      if(this.charRace === 'Dwarf'){
        output=output+2
      }
      if(this.charRace === 'Human' && this.extraPoint === "Wis") {
        output = output + 2
      }
      this.charWis = output
      return this.charWis
    },
    calcCha: function() {
      this.remAbilityPoints = this.remAbilityPoints+this.scoreObj[this.rawCha]-this.Cha
      let output = this.pointObj[this.Cha]
      if(isNaN(output) ){ output = 0}
      this.rawCha = output
      if(this.charRace === 'Gnome'){
        output=output+2
      } else if (this.charRace === 'Dwarf') {
        output = output - 2
      }
      if(this.charRace === "Human" && this.extraPoint === "Cha") {
        output = output + 2
      }
      this.charCha = output
      return this.charCha
    },
  },
};
</script>

<style scoped>
</style>