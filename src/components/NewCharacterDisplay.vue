<template>
  <div class="row">
    <div class="col-6">
      <characterInput v-on:submit="display" id="charInput" />
    </div>
    <div class="col-6">
      <characterDisplay v-bind:charSheet="this.charSheet" />
      <button v-on:click="Save">Save This Character To Datatabase</button>
    </div>
  </div>
</template>

<script>
import CharacterDisplay from "./CharacterDisplay.vue";
import CharacterInput from "./CharacterInput.vue";
import gql from "graphql-tag";

export default {
  name: "NewCharacterDisplay",
  components: {
    CharacterInput,
    CharacterDisplay,
  },
  data() {
    return {
      character: "",
      charSheet: {},
    };
  },
  methods: {
    Save: async function() {
      if (this.charName === undefined) {
        await document.getElementById("Display").click();
      }
      await this.$apollo.mutate({
        mutation: gql`
          mutation(
            $name: String!
            $race: String!
            $str: Int!
            $dex: Int!
            $con: Int!
            $int: Int!
            $wis: Int!
            $cha: Int!
          ) {
            NewCharSheet(
              name: $name
              race: $race
              str: $str
              dex: $dex
              con: $con
              int: $int
              wis: $wis
              cha: $cha
            ) {
              name
            }
          }
        `,
        variables: {
          name: this.charName,
          race: this.charRace,
          str: this.charStr,
          dex: this.charDex,
          con: this.charCon,
          int: this.charInt,
          wis: this.charWis,
          cha: this.charCha,
        },
      });
    },
    display: function(
      charName,
      charRace,
      charStr,
      charDex,
      charCon,
      charInt,
      charWis,
      charCha
    ) {
      this.charName = charName;
      this.charRace = charRace;
      this.charStr = charStr;
      this.charDex = charDex;
      this.charCon = charCon;
      this.charInt = charInt;
      this.charWis = charWis;
      this.charCha = charCha;
      this.charSheet = {
        name: charName,
        race: charRace,
        str: charStr,
        dex: charDex,
        con: charCon,
        int: charInt,
        wis: charWis,
        cha: charCha,
      };
    },
  },
};
</script>
