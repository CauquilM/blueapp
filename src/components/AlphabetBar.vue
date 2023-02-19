<template>
  <div>
    <h1>bleu<span :style="{ 'font-weight': 'normal' }">122</span></h1>
    <Alphanav direction="vertical" @selected="getLetter" />
    <table>
      <tr>
        <th>Name</th>
        <th>Phone</th>
      </tr>
      <tr v-for="user in filteredUsers" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.role }}</td>
      </tr>
    </table>
  </div>
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
      selectedLetter: "",
    };
  },
  beforeMount() {
    this.getUsers();
  },
  computed: {
    filteredUsers() {
      if (!this.selectedLetter) {
        return this.users;
      }
      return this.users.filter((user) =>
        user.name.toLowerCase().startsWith(this.selectedLetter.toLowerCase())
      );
    },
    ...mapState(["users"]),
  },
  methods: {
    getLetter(chosenLetter) {
      this.selectedLetter = chosenLetter.value;
    },
    ...mapActions(["getUsers"]),
  },
};
</script>
