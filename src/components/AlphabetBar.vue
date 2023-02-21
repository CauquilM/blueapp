<template>
  <v-row justify="center" v-resize="modifyWindowSize">
    <!-- All -->
    <v-col :cols="12" :md="7" :sm="10">
      <v-row justify="center">
        <v-col class="mt-5" cols="auto">
          <v-img contain max-width="180" src="../images/logo.svg" />
        </v-col>
      </v-row>
      <!-- Search Bar -->
      <v-row justify="center">
        <v-col cols="10" class="mt-5">
          <v-text-field outlined v-model="name" label="Chercher" type="text" />
        </v-col>
      </v-row>
      <!-- Main -->
      <v-row justify="center">
        <v-col cols="10">
          <v-card
            class="mb-7"
            max-width="600"
            outlined
            v-for="personne in filteredUsers"
            :key="personne.index"
          >
            <!-- Cards -->
            <v-row justify="center" align="center" no-gutters>
              <v-col cols="2">
                <v-avatar color="red" :size="windowSize - 12 > 550 ? 80 : 60">
                  <v-img contain alt="" :src="personne.image" />
                </v-avatar>
              </v-col>
              <v-col cols="9"
                ><v-card-title>{{ personne.prenom }}</v-card-title>

                <v-card-text v-if="windowSize - 12 > 465">
                  <p>{{ personne.birthday }}</p>
                  <p>{{ personne.mail }}</p>
                  <v-chip small class="mr-1">{{ personne.technos }}</v-chip>
                </v-card-text>
                <v-card-text v-else>
                  <p>{{ personne.birthday }}</p>
                  <p>{{ personne.mail }}</p>
                  <v-chip x-small class="mr-1">{{ personne.technos }}</v-chip>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <!-- Alphanav -->
        <v-col cols="1">
          <Alphanav direction="vertical" @selected="getLetter" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Alphanav from "vue-alphanav";
import { mapState } from "vuex";

export default {
  name: "AlphabetBar",
  components: {
    Alphanav,
  },
  data() {
    return {
      windowSize: 0,
      name: "",
      selectedLetter: "",
    };
  },

  computed: {
    filteredUsers() {
      if (this.selectedLetter) {
        return this.personnes.filter((contact) =>
          contact.prenom
            .toLowerCase()
            .startsWith(this.selectedLetter.toLowerCase())
        );
      }
      if (this.name) {
        return this.personnes.filter((contact) =>
          contact.prenom.toLowerCase().includes(this.name.toLowerCase())
        );
      }
      return this.personnes;
    },
    ...mapState(["personnes"]),
  },
  methods: {
    modifyWindowSize() {
      this.windowSize = window.innerWidth;
    },
    getLetter(chosenLetter) {
      this.selectedLetter = chosenLetter.value;
    },
    searchByName(name) {
      if (name !== "") {
        console.log(name);
      }
    },
    getRandomColor() {
      let color;
      do {
        color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      } while (this.colorBrightness(color) < 150);
      return color;
    },
    colorBrightness(color) {
      const hex = color.slice(1);
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      return (r * 299 + g * 587 + b * 114) / 1000;
    },
  },
};
</script>
<style>
.alphanav[data-v-49c2182e] {
  background-color: #f6f6f6;
}

.alphanav li a[data-v-49c2182e] {
  color: black;
}
</style>
