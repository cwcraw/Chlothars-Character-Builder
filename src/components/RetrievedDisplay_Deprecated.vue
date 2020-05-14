<template>
  <div>
    <div>
      Display As:
        <select class="Display" v-model="display">
        <option v-for="display in displayList" :key="display.id">
          {{ display }}
        </option>
      </select>
      <div v-if="this.display==='JSON'" >
        <h1>{{char_sheet}}</h1>
      </div>
      <div v-else-if="this.display==='CSV'" >
        <h1>Name, {{char_sheet.name}}, Race, {{char_sheet.race}},
          Str, {{char_sheet.str}},
          Dex, {{char_sheet.dex}},
          Con, {{char_sheet.con}},
          Int, {{char_sheet.int}},
          Wis, {{char_sheet.wis}},
          Cha, {{char_sheet.cha}}
          
          </h1>
      </div>
      <div v-if="this.display==='Browser'">
        <h1> {{char_sheet.name}} the {{char_sheet.race}} </h1>
        <h3>Str: {{char_sheet.str}}</h3> 
        <h3>Dex: {{char_sheet.dex}}</h3> 
        <h3>Con: {{char_sheet.con}}</h3> 
        <h3>Int: {{char_sheet.int}}</h3> 
        <h3>Wis: {{char_sheet.wis}}</h3> 
        <h3>Cha: {{char_sheet.cha}}</h3> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterDisplay",
  data: () => {
    return {
    displayList: ["Browser","JSON","CSV"],
    display: ""
    }
  },
  props: {
  char_sheet: Object,
  },
};
</script>
