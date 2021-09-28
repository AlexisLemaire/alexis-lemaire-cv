<template>
  <div class="p-3">
    <v-card class="p-3" elevation="22">
      <h2 class="text-center">Modifier un projet</h2>
      <v-form>
        <v-text-field v-model="project.secretKey" label="Clef Secrete (seul les admins peuvent modifier un projet)" />
        <v-text-field v-model="project.title" label="Titre" />
        <v-text-field v-model="project.description" label="Description" />
        <v-text-field v-model="project.link" label="Lien du site" />
        <v-text-field v-model="project.github" label="Github du site" />
        <div>Date de mise en production :</div>
        <v-date-picker v-model="project.date" width="100%" />

        <v-btn width="100%" dark @click="updateProject()"> Modifier </v-btn>
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

  async created() {
    await this.preFillForm();
  },

  methods: {
    async preFillForm() {
      const res = (await axios.get(`${process.env.herokuAPI}/projects/` + this.$route.params.id)).data;
      await (this.project = res[0]);
    },

    async updateProject() {
      this.res = (await axios.put(`${process.env.herokuAPI}/projects/` + this.$route.params.id, this.project)).data;
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
}
</style>
