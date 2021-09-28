<template>
  <div class="p-3">
    <v-card class="p-3" elevation="22">
      <h2 class="text-center">Supprimer un projet</h2>
      <v-form>
        <v-text-field v-model="secretKey" label="Clef Secrete (seul les admins peuvent modifier un projet)" />
        <v-btn width="100%" dark @click="deleteProject()"> Modifier </v-btn>
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
    };
  },

  methods: {
    async deleteProject() {
      this.res = (await axios.delete(`${process.env.localAPI}/projects/` + this.$route.params.id + "/" + this.secretKey)).data;
    },
  },
};
</script>

<style scoped>
.v-card {
  height: 300px;
  overflow-y: scroll;
}
</style>
