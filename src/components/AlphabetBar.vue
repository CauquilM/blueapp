<template>
  <v-row justify="center">
    <v-col cols="7">
      <v-row justify="center">
        <v-col class="mt-5" cols="auto">
          <v-img contain max-width="180" src="../images/logo.svg" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            outlined
            v-model="name"
            label="Message"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="11">
          <v-card
            class="mb-7"
            max-width="600"
            outlined
            v-for="user in filteredUsers"
            :key="user.id"
          >
            <v-row justify="center" align="center">
              <v-col cols="auto">
                <v-avatar color="red" size="80">
                  <v-img contain src="../images/icons8-user-80.png" alt="" />
                </v-avatar>
              </v-col>
              <v-col cols="auto"
                ><v-card-title>{{ user.name }}</v-card-title>

                <v-card-text>
                  <p>{{ user.phone }}</p>
                  <p>{{ user.email }}</p>
                  <v-chip class="mr-1" small>{{ user.role }}</v-chip>
                  <v-chip
                    small
                    class="mr-1"
                    v-for="(skill, index) in user.skills"
                    :key="index"
                    :color="getRandomColor()"
                    >{{ skill }}</v-chip
                  >
                </v-card-text></v-col
              >
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="1">
          <Alphanav
            direction="vertical"
            @selected="getLetter"
            style="{background: #f6f6f6;}"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Alphanav from "vue-alphanav";
import { mapActions, mapState } from "vuex";

export default {
  name: "AlphabetBar",
  components: {
    Alphanav,
  },
  data() {
    return {
      name: "",
      selectedLetter: "",
    };
  },
  created() {
    this.getUsers();
  },
  computed: {
    filteredUsers() {
      if (this.selectedLetter) {
        return this.users.filter((contact) =>
          contact.name
            .toLowerCase()
            .startsWith(this.selectedLetter.toLowerCase())
        );
      }
      if (this.name) {
        return this.users.filter((contact) =>
          contact.name.toLowerCase().startsWith(this.name.toLowerCase())
        );
      }
      return this.users;
    },
    ...mapState(["users"]),
  },
  methods: {
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
    ...mapActions(["getUsers"]),
  },
};
</script>
<style>
  .alphanav[data-v-49c2182e]{
    background-color: #f6f6f6;
  }

  .alphanav li a[data-v-49c2182e]{
    color: black;
  }
</style>
