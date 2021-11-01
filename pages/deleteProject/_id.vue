<template>
  <div class="p-3">
    <v-card class="p-3 text-center" elevation="22">
      <v-form>
        <h1 class="h3 mb-3 font-weight-normal">Supprimer le projet : {{ project.title }}</h1>
        <strong>
          Vous pouvez supprimer le projet selectionné via cette page. Le projet ne sera supprimé que si vous possedez la bonne clef
          secrète.
        </strong>
        <br /><br />
        <v-text-field v-model="secretKey" label="Clef Secrete (seul les admins peuvent modifier un projet)" />
        <v-btn width="100%" dark @click="deleteProject()"> Supprimer </v-btn>
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
      secretKey: 0,
      res: {},
      project: {},
    };
  },

  async created() {
    this.project = (await axios.get(`${process.env.API}/projects/` + this.$route.params.id)).data;
  },

  methods: {
    async deleteProject() {
      this.res = (await axios.delete(`${process.env.API}/projects/` + this.$route.params.id + "/" + this.secretKey)).data;
    },
  },
};
</script>

<style scoped>
.v-card {
  height: 250px;
  overflow-y: scroll;
}

.v-alert {
  margin: 1%;
}
</style>
