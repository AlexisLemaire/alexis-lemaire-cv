<template>
  <div>
    <v-card id="cv" elevation="22">
      <h2 class="text-center">ALEXIS LEMAIRE</h2>
      <br />

      <div class="w-100">
        <img src="../assets/newMoi(1).jpeg" width="100%" height="100%" />
        <hr />
        <div>
          <div><strong>Diplôme:</strong> Bac +2 Développeur Web</div>
          <div><strong>Expérience:</strong> 4 mois en JS Fullstack</div>
          <div><strong>Recherche:</strong> CDD, CDI</div>
          <div><strong>Points forts:</strong> Déterminé, perfectionniste, prêt à apprendre de nouvelles technologies</div>
        </div>
        <hr />
        <div>
          <div><strong>Âge:</strong> 23 ans</div>
          <div><strong>Mobilité:</strong> Télétravail, Orléans, Le Mans</div>
          <div><strong>Email:</strong> alexisethan.lemaire@gmail.com</div>
          <div><strong>Téléphone:</strong> 06 73 34 01 72</div>
          <a href="https://www.linkedin.com/in/alexis-lemaire-7b9882212/">Linkedin</a>
        </div>
      </div>

      <br />
      <hr />
      <div class="text-center">
        <h5>Compétences Notables</h5>
        API Rest
        <br />
        Intégration continue (Pipelines Gitlab) | TDD
        <br />
        Typescript
        <br />
        Bootstrap
      </div>
      <hr />
      <h4 class="text-center">Projets</h4>
      <v-btn v-for="(project, index) in project_list" :key="index" @click="setSelectedProject(project)">
        {{ project.title }}
      </v-btn>
    </v-card>

    <v-dialog v-model="isOpenDialog" class="p-4 bg-dark">
      <v-card class="p-4">
        <h3 class="text-center">{{ selectedProject.title }}</h3>
        <v-card-subtitle class="text-center"> {{ selectedProject.date }} </v-card-subtitle>
        <div>{{ selectedProject.description }}</div>
        <br />
        <strong>Développement: </strong> {{ selectedProject.dev }}
        <br />
        <strong>Frontend:</strong> {{ selectedProject.frontendTech }}
        <br />
        <strong>Backend:</strong> {{ selectedProject.backendTech }} <br /><br />
        <div class="text-center">
          <a :href="selectedProject.link" target="_blank"><v-btn>Site</v-btn></a>
          <a :href="selectedProject.github" target="_blank"><v-btn>Github</v-btn></a>
          <a :href="selectedProject.githubAPI" target="_blank"><v-btn>Github API</v-btn></a>
          <v-btn :to="'/changeProject/' + selectedProject.id"><v-icon>mdi-cog</v-icon></v-btn>
          <v-btn :to="'/deleteProject/' + selectedProject.id"><v-icon>mdi-delete-empty</v-icon></v-btn>
        </div>
        <br />
        <iframe :src="selectedProject.link" width="100%" height="390px" />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["project_list"],

  data() {
    return {
      selectedProject: {},
      isOpenDialog: false,
    };
  },

  methods: {
    setSelectedProject(project) {
      this.isOpenDialog = !this.isOpenDialog;
      this.selectedProject = project;
    },
  },
};
</script>

<style scoped>
#cv {
  font-size: 16px;
  padding: 0.5%;
  width: 94%;
  margin: 3%;
}

h2 {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.v-btn {
  width: 98%;
  margin: 0.2%;
  margin-left: 1%;
  background-color: rgb(143, 143, 199) !important;
  border: 2px solid rgb(0, 0, 0);
}

.v-dialog a,
.v-dialog .v-btn {
  background-color: lavender !important;
}
</style>
