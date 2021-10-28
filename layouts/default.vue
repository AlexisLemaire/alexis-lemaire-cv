<template>
  <v-app>
    <nav class="d-flex justify-content-around">
      <v-btn to="/cv">CV</v-btn>
      <v-btn to="/addProject">Ajout projet</v-btn>
    </nav>

    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style scoped>
.v-btn {
  background-color: red !important;
  width: 48%;
  border: 1px solid black;
}

.v-btn:hover {
  background-color: lawngreen !important;
}
</style>
