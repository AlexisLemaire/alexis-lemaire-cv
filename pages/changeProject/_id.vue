<template>
  <div class="p-3">
    <v-card class="p-3" elevation="22">
      <h2 class="text-center">Modifier un projet</h2>
      <v-form v-model="isValid">
        <v-text-field v-model="project.secretKey" label="Clef Secrete" required :rules="requiredRules" />
        <v-text-field v-model="project.title" label="Titre" required :rules="requiredRules" />
        <v-text-field v-model="project.client" label="Client" required :rules="requiredRules" />
        <v-text-field v-model="project.description" label="Description" required :rules="requiredRules" />
        <v-text-field v-model="project.link" label="Lien du site" required :rules="requiredRules" />
        <v-text-field v-model="project.github" label="Github du site" required :rules="requiredRules" />
        <v-text-field v-model="project.githubAPI" label="Github de l'API" required :rules="requiredRules" />
        <v-text-field v-model="project.frontendTech" label="Techs Frontend" required :rules="requiredRules" />
        <v-text-field v-model="project.backendTech" label="Techs Backend" required :rules="requiredRules" />
        <v-select
          v-model="project.dev"
          label="Développement"
          :items="['En Cours', 'Maintenu', 'Non-Maintenu']"
          required
          :rules="requiredRules"
        />
        <v-select v-model="project.responsive" label="Responsive" :items="['Oui', 'Non']" required :rules="requiredRules" />
        <div>Date de mise en production :</div>
        <v-date-picker v-model="project.date" width="100%" />

        <v-btn width="100%" dark :disabled="!isValid" @click="updateProject()"> Modifier </v-btn>
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
      requiredRules: [(v) => !!v || "Le champ est requis"],
      isValid: false,
    };
  },

  async created() {
    await this.preFillForm();
  },

  methods: {
    async preFillForm() {
      const res = (await axios.get(`${process.env.API}/projects/` + this.$route.params.id)).data;
      await (this.project = res[0]);
    },

    async updateProject() {
      this.res = (await axios.put(`${process.env.API}/projects/` + this.$route.params.id, this.project)).data;
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

.v-alert {
  margin: 1%;
}
</style>
