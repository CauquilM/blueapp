<template>
  <div>
    <h1>bleu<span :style="{ 'font-weight': 'normal' }">122</span></h1>
    <Alphanav direction="vertical"/>
    <table>
      <tr>
        <th>Name</th>
        <th>Phone</th>
      </tr>
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
      if (!this.selectedLetter) {
        return this.contacts;
      }
      return this.contacts.filter((contact) =>
        contact.name.toLowerCase().startsWith(this.selectedLetter.toLowerCase())
      );
    },
  },
  methods: {
    getLetter(chosenLetter) {
      this.selectedLetter = chosenLetter.value;
      console.log(this.selectedLetter);
    },
  },
};
</script>
