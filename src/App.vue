<template>
  <v-app style="
    background: #f6f6f6;
  ">
    <HomeView />
  </v-app>
</template>
<script>
import HomeView from "./views/HomeView.vue";

export default {
  name: "App",
  components: { HomeView },
};
</script>
