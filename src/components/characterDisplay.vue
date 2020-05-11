<template>
  <div>
    <h1>{{char_sheet}}</h1>
  </div>
</template>

<script>
export default {
  name: "CharacterDisplay",
    props: {
    char_sheet: Object,
  },
};
</script>
