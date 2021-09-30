<template>
  <div class="p-3">
    <v-card class="p-3" elevation="22">
      <h2 class="text-center">Ajouter un nouveau projet</h2>
      <v-form>
        <v-text-field v-model="project.secretKey" label="Clef Secrete (seul les admins peuvent ajouter un projet)" />
        <v-text-field v-model="project.title" label="Titre" />
        <v-text-field v-model="project.description" label="Description" />
        <v-text-field v-model="project.link" label="Lien du site" />
        <v-text-field v-model="project.github" label="Github du site" />
        <v-text-field v-model="project.githubAPI" label="Github de l'API" />
        <div>Date de mise en production :</div>
        <v-date-picker v-model="project.date" width="100%" />

        <v-btn width="100%" dark @click="postProject()"> Ajouter </v-btn>
      </v-form>
      <v-alert v-if="res.error !== undefined" text color="red" outlined>{{ res.error }}</v-alert>
      <v-alert v-if="res.success !== undefined" text color="green" outlined>{{ res.success }}</v-alert>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      project: {},
      res: {},
    };
  },

  methods: {
    async postProject() {
      this.res = (await axios.post(`${process.env.API}/projects`, this.project)).data;
    },
  },
};
</script>

<style scoped>
.v-card {
  height: 650px;
  overflow-y: scroll;
}

.v-picker {
  height: 10%;
  margin-bottom: 1%;
  margin-top: 1%;
}
</style>
