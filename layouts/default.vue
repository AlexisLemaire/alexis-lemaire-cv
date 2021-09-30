<template>
  <v-app>
    <div>
      <v-btn to="/cv" width="50%" dark>CV</v-btn>
      <v-btn to="/addProject" width="49%" dark>Ajouter un projet</v-btn>
    </div>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
.v-alert {
  margin: 1%;
}
</style>
