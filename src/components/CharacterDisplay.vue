<template>
  <div>
    <div>
      Display As:
      <select class="Display" v-model="display">
        <option v-for="display in displayList" :key="display.id">
          {{ display }}
        </option>
      </select>
      <div v-if="this.display === 'JSON'">
        <h1>{{ charSheet }}</h1>
      </div>
      <div v-else-if="this.display === 'CSV'">
        <h1>
          Name, {{ charSheet.name }}, Race, {{ charSheet.race }}, Str,
          {{ charSheet.str }}, Dex, {{ charSheet.dex }}, Con,
          {{ charSheet.con }}, Int, {{ charSheet.int }}, Wis,
          {{ charSheet.wis }}, Cha, {{ charSheet.cha }}
        </h1>
      </div>
      <div v-if="this.display === 'Browser'">
        <h1>{{ charSheet.name }} the {{ charSheet.race }}</h1>
        <h3>Str: {{ charSheet.str }}</h3>
        <h3>Dex: {{ charSheet.dex }}</h3>
        <h3>Con: {{ charSheet.con }}</h3>
        <h3>Int: {{ charSheet.int }}</h3>
        <h3>Wis: {{ charSheet.wis }}</h3>
        <h3>Cha: {{ charSheet.cha }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterDisplay",
  data: () => {
    return {
      displayList: ["Browser", "JSON", "CSV"],
      display: "Browser",
    };
  },
  props: {
    charSheet: Object,
  },
};
</script>
