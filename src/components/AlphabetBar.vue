<template>
  <div>
    <h1>bleu<span :style="{ 'font-weight': 'normal' }">122</span></h1>
    <Alphanav direction="vertical" @selected="getLetter" />
    <v-row>
      <v-col cols="7">
        <v-text-field
          v-model="name"
          label="Message"
          type="text"
        ></v-text-field>
      </v-col>
    </v-row>
    <table>
      <tr v-for="contact in filteredContacts" :key="contact.id">
        <td>{{ contact.name }}</td>
        <td>{{ contact.phone }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Alphanav from "vue-alphanav";

export default {
  name: "AlphabetBar",
  components: {
    Alphanav,
  },
  data() {
    return {
      name: "",
      selectedLetter: "",
      contacts: [
        { id: 1, name: "John Doe", phone: "555-555-5555" },
        { id: 2, name: "Jane Doe", phone: "555-555-5556" },
        { id: 3, name: "Jim Smith", phone: "555-555-5557" },
      ],
    };
  },
  computed: {
    filteredContacts() {
      if (this.selectedLetter) {
        return this.contacts.filter((contact) =>
          contact.name
            .toLowerCase()
            .startsWith(this.selectedLetter.toLowerCase())
        );
      }
      if (this.name) {
        return this.contacts.filter((contact) =>
          contact.name
            .toLowerCase()
            .startsWith(this.name.toLowerCase())
        );
      }
      return this.contacts;
    },
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
  },
};
</script>
