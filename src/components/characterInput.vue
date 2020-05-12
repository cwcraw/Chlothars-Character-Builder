<template>
  <div>
    <h1>Character Input</h1>
    <div>
      Character Name:
    <input v-model="Char_name"> 
    </div>
    <div>
      Character Race:
      <select class="race" v-model="Char_race">
        <option v-for="race in RaceList" :key="race.id">
          {{ race }}
        </option>
      </select>
    <div v-if="this.Char_race==='Human'">
       <select class="race" v-model="Extra_point">
        <option v-for="abl in AblList" :key="abl.id">
          {{ abl }}
        </option>
      </select>
    </div>
    </div>
    <div> Character Abilities:
      <br> 
      Strength Points: <input v-model="point_str" v-on:keyup.enter = "Calc_str(point_str, Char_race,Char_str)" > <br>
      Strength Value: {{Char_str}} <br>
      Dexterity Points<input v-model="point_dex"> <br>
      Dexterity Value: {{Char_dex}} <br>
      Constitution Points<input v-model="point_con"> <br>      
      Constitution Value: {{Char_con}} <br>
      Intelligence Points<input v-model="point_int"> <br>      
      Intelligence Value: {{Char_int}} <br>
      Wisdom Points<input v-model="point_wis"> <br>
      Wisdom Value: {{Char_wis}} <br>
      Charisma Points<input v-model="point_cha"> <br>
      Charisma Value: {{Char_cha}} <br>
  </div>
    <button v-on:click="$emit('submit', Char_name, Char_race, Char_str, Char_dex, Char_con, Char_int, Char_wis, Char_cha)"> Save </button> 
  </div>
</template>

<script>
export default {
  name: "characterInput",
  data: () => {
    return {
      RaceList: ["Human","Gnome","Dwarf"],
      AblList: ["Str", "Dex", "Con", "Int", "Wis","Cha"],
      Extra_point:"",
      Point_list: [-4,-2,-1,0,1,2,3,5,7,10,13,17],
      Point_obj: {"-4":7,"-2":8,"-1":9,"0":10,"1":11,"2":12,"3":13,"5":14,"7":15,"10":16,"13":17,"17":18},
      Char_name: "",
      Char_race: "",
      Char_str: "",
      point_cha: "",
      point_str: "",
      point_dex: "",
      point_con: "",
      point_int: "",
      point_wis: "",
      point_cha: "",
    }
  },
  methods: {
    Calc_str: function(point_str) {
      let output = parseInt(point_str)
      console.log(this.Point_obj["-4"])
      if(isNaN(output) ){ output = 0}
      if(this.Char_race === 'Dwarf'){
        console.log('DWARVES')
        output=output+2
      } else if (this.Char_race === 'Gnome') {
        console.log("gnome")
        output = output-2
      }
        console.log(this.Extra_point, this.Char_race)
      if(this.Char_race === 'Human' && this.Extra_point === "Str") {
        console.log(this.Extra_point)
        output = output + 2
      }
      this.Char_str = output
      return this.Char_str
    },
    Calc_dex: function(point_dex) {
      let output = parseInt(point_dex)
      if(isNaN(output) ){ output = 0}
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
      let output = parseInt(point_con)
      if(isNaN(output) ){ output = 0}
      if(this.Char_race === 'Elf'){
        console.log('Elves')
        output=output-2
      } else if (this.Char_race === 'Dwarf') {
        output = output-2
      }
      if(this.Char_race === 'Human' && this.Extra_point === "con") {
        output = output + 2
      }      
      this.Char_con = output
      return this.Char_con
    },
    Calc_int: function(point_int) {
      let output = parseInt(point_int)
      if(isNaN(output) ){ output = 0}
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
      let output = parseInt(point_wis)
      if(isNaN(output) ){ output = 0}
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
      let output = parseInt(point_cha)
      if(isNaN(output) ){ output = 0}
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
  computed: {
    // Char_str: (point_str) =>{
    //   let Char_race=`$Char_race`
    //   console.log(Char_race)
    //   let output = parseInt( point_str._data.point_str)
    //   if(isNaN(output) ){ output = 0}
    //   // if(Char_race === 'Dwarf'){
    //   //   console.log('DWARVES')
    //   //   output=output+2
    //   // }
    //   return output
    // },
    Char_dex: (point_dex) =>{
      let output = parseInt( point_dex._data.point_dex)*2
      if(isNaN(output) ){ output = 0}
      return output
    },
    Char_con: (point_con) =>{
      let output = parseInt( point_con._data.point_con)*2
      if(isNaN(output) ){ output = 0}
      return output
    },
    Char_wis: (point_wis) =>{
      let output = parseInt( point_wis._data.point_wis)*2
      if(isNaN(output) ){ output = 0}
      return output
    },
    Char_int: (point_int) =>{
      let output = parseInt( point_int._data.point_int)*2
      if(isNaN(output) ){ output = 0}
      return output
    },
    Char_cha: (point_cha) =>{
      let output = parseInt( point_cha._data.point_cha)*2
      if(isNaN(output) ){ output = 0}
      return output
    },

  }
  // methods: {
  //   calculate: (point_str, point_dex, point_con, point_int, point_wis, point_cha) => {
  //     let str = point_str
  //     let dex = point_dex
  //     let con = point_con
  //     let int = point_int
  //     let wis = point_wis
  //     let cha = point_cha
  //     return [str, dex,con,int,wis,cha]
  //   }
  // }
};
</script>
