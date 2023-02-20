<template>
  <v-app style="
    background: #f6f6f6;
  ">
    <HomeView />
  </v-app>
</template>
<script>
import { mapActions } from "vuex";
import HomeView from "./views/HomeView.vue";

export default {
  name: "App",
  components: { HomeView },
  created() {
    this.getUsers();
  },
  methods: {
    ...mapActions(["getUsers"]),
  },
};
</script>
