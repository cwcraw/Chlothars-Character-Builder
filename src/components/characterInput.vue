<template>
  <div>
    <h1>Character Input</h1>
    <div>
      Character Name
      <input v-model="Char_name"> 
    </div>
    <button v-on:click="$emit('submit', Char_name)"> Save </button> 
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      Char_name: ""
    }
  },
  name: "characterInput",
};
</script>
