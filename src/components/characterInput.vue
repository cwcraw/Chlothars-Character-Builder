<template>
  <div>
    <h1>Character Input</h1>
    <div>
      Character Name:
    <input v-model="Char_name"> 
    </div>
    <div>
      Setting:
      <select class="setting" v-model="setting" v-on:change="Set_points">
        <option v-for="setting in Setting_list" :key="setting.id">
          {{ setting }}
        </option>
      </select>
    </div>
    <div>
      Initial Ability Points: {{Ability_points}} <br>
      Remaining Ability Points: {{Rem_ability_points}}
    </div>
    <div>
      Character Race:
      <select class="race" v-model="Char_race">
        <option v-for="race in RaceList" :key="race.id">
          {{ race }}
        </option>
      </select>
    <div v-if="this.Char_race==='Human'">
      <p> Humans get a +2 Bonus to any 1 stat, please select the stat and see the bonus upon changing the value. </p>
       <select class="race" v-model="Extra_point">
        <option v-for="abl in AblList" :key="abl.id">
          {{ abl }}
        </option>
      </select>
    </div>
    <div v-if="this.Char_race==='Gnome'">
      <p> Gnomes have a +2 bonus to Cha and Con but a -2 penalty to Str.</p>
    </div>
    <div v-if="this.Char_race==='Dwarf'">
      <p> Dwarfs have a +2 bonus to Wis and Con, but a -2 penalty to Cha.  </p>
    </div>
    <div v-if="this.Char_race==='Elf'">
      <p> Elves have a +2 bonus to Int and Dex, but a -2 penalty to Con.  </p>
    </div>
    </div>
    <div> Character Abilities:
      <br> Strengh Selection    
      <select class="Abl_score" v-model="Str" v-on:change="Calc_str">
        <option v-for="point in Point_list" :key="point.id">
          {{ point }}
        </option>
      </select>
      Strength Score: {{Char_str}} <br>
      <br> Dexterity Selection    
      <select class="Abl_score" v-model="Dex" v-on:change="Calc_dex">
        <option v-for="point in Point_list" :key="point.id">
          {{ point }}
        </option>
      </select>
      Dexterity Score: {{Char_dex}} <br>
      <br> Constitution Selection    
      <select class="Abl_score" v-model="Con" v-on:change="Calc_con">
        <option v-for="point in Point_list" :key="point.id">
          {{ point }}
        </option>
      </select>
      Constitution Score: {{Char_con}} <br>
      <br> Intelligence Selection    
      <select class="Abl_score" v-model="Int" v-on:change="Calc_int">
        <option v-for="point in Point_list" :key="point.id">
          {{ point }}
        </option>
      </select>
      Intelligence Score: {{Char_int}} <br>
      <br> Wisdom Selection    
      <select class="Abl_score" v-model="Wis" v-on:change="Calc_wis">
        <option v-for="point in Point_list" :key="point.id">
          {{ point }}
        </option>
      </select>
      Wisdom Score: {{Char_wis}} <br>
      <br> Charisma Selection    
      <select class="Abl_score" v-model="Cha" v-on:change="Calc_cha">
        <option v-for="point in Point_list" :key="point.id">
          {{ point }}
        </option>
      </select>
      Charisma Score: {{Char_cha}} <br>
  </div>
    <button v-on:click="$emit('submit', Char_name, Char_race, Char_str, Char_dex, Char_con, Char_int, Char_wis, Char_cha)" id="Display"> Update Display </button> 
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
      Extra_point:"",
      Point_list: [-4,-2,-1,0,1,2,3,5,7,10,13,17],
      Point_obj: {"-4":7,"-2":8,"-1":9,"0":10,"1":11,"2":12,"3":13,"5":14,"7":15,"10":16,"13":17,"17":18},
      Score_obj: {"7":-4,"8":-2,"9":-1,"10":0,"11":1,"12":2,"13":3,"14":5,"15":7,"16":10,"17":14,"18":17},
      Setting_list:["Low Fantasy","Standard Fantasy","High Fantasy", "Epic Fantasy"],
      Setting_obj:{"Low Fantasy":10,"Standard Fantasy":15,"High Fantasy":20, "Epic Fantasy":25},
      setting: 0,
      Ability_points: 15,
      Rem_ability_points: 15,
      Char_name: "",
      Char_race: "",
      Char_str: 10,
      Char_dex: 10,
      Char_con: 10,
      Char_int: 10,
      Char_wis: 10,
      Char_cha: 10,
      Raw_str: 10,
      Raw_dex: 10,
      Raw_con: 10,
      Raw_int: 10,
      Raw_wis: 10,
      Raw_cha: 10,
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
      this.Char_str= 10
      this.Char_dex= 10
      this.Char_con= 10
      this.Char_int= 10
      this.Char_wis= 10
      this.Char_cha= 10
      this.Char_name= ""
      this.Char_race= ""
    },
    Set_points: function() {
      console.log(this.setting)
      this.Ability_points=this.Setting_obj[this.setting]
      this.Rem_ability_points=this.Ability_points
    },
    Calc_str: function() {
      this.Rem_ability_points = this.Rem_ability_points+this.Score_obj[this.Raw_str]-this.Str
      let output = this.Point_obj[this.Str]
      if(isNaN(output) ){ output = 0}
      this.Raw_str = output
      if (this.Char_race === 'Gnome') {
        output = output-2
      }
      if(this.Char_race === 'Human' && this.Extra_point === "Str") {
        console.log(this.Extra_point)
        output = output + 2
      }
      this.Char_str = output
      return this.Char_str
    },
    Calc_dex: function(point_dex) {
      this.Rem_ability_points = this.Rem_ability_points+this.Score_obj[this.Raw_dex]-this.Dex
      let output = this.Point_obj[this.Dex]
      if(isNaN(output) ){ output = 0}
      this.Raw_dex = output
      if(this.Char_race === 'Elf'){
        console.log('Elves')
        output=output+2
      }
      if(this.Char_race === 'Human' && this.Extra_point === "Dex") {
        output = output + 2
      }
      this.Char_dex = output
      return this.Char_dex
    },
    Calc_con: function(point_con) {
      this.Rem_ability_points = this.Rem_ability_points+this.Score_obj[this.Raw_con]-this.Con
      let output = this.Point_obj[this.Con]
      if(isNaN(output) ){ output = 0}
      this.Raw_con = output
      if(this.Char_race === 'Elf'){
        console.log('Elves')
        output=output-2
      } else if (this.Char_race === 'Dwarf') {
        output = output+2
      } else if (this.Char_race === 'Gnome') {
        output = output+2
      }
      if(this.Char_race === 'Human' && this.Extra_point === "con") {
        output = output + 2
      }      
      this.Char_con = output
      return this.Char_con
    },
    Calc_int: function(point_int) {
      this.Rem_ability_points = this.Rem_ability_points+this.Score_obj[this.Raw_int]-this.Int
      let output = this.Point_obj[this.Int]
      if(isNaN(output) ){ output = 0}
      this.Raw_int = output
      if(this.Char_race === 'Elf'){
        console.log('Elves')
        output=output+2
      }
      if(this.Char_race === 'Human' && this.Extra_point === "Int") {
        output = output + 2
      }    
      this.Char_int = output
      return this.Char_int
    },
    Calc_wis: function(point_wis) {
      this.Rem_ability_points = this.Rem_ability_points+this.Score_obj[this.Raw_wis]-this.Wis
      let output = this.Point_obj[this.Wis]
      if(isNaN(output) ){ output = 0}
      this.Raw_wis = output
      if(this.Char_race === 'Dwarf'){
        console.log('Dwarf')
        output=output+2
      }
      if(this.Char_race === 'Human' && this.Extra_point === "Wis") {
        output = output + 2
      }
      this.Char_wis = output
      return this.Char_wis
    },
    Calc_cha: function(point_cha) {
      this.Rem_ability_points = this.Rem_ability_points+this.Score_obj[this.Raw_cha]-this.Cha
      let output = this.Point_obj[this.Cha]
      if(isNaN(output) ){ output = 0}
      this.Raw_cha = output
      if(this.Char_race === 'Gnome'){
        console.log('Gnome')
        output=output+2
      } else if (this.Char_race === 'Dwarf') {
        output = output - 2
      }
      if(this.Char_race === "Human" && this.Extra_point === "Cha") {
        output = output + 2
      }
      this.Char_cha = output
      return this.Char_cha
    },
  },
};
</script>

<style scoped>
#Display {

}
</style>