<template>
  <div class="d-flex justify-content-between p-3">
    <v-card class="skills" outlined>
      <img src="../assets/htmlCSSJS.png" height="14%" width="99%" />
      <img src="../assets/VueJS.jpg" height="14%" width="99%" />
      <img src="../assets/VuetifyJS.png" height="14%" width="99%" />
      <img src="../assets/NuxtJS.png" height="14%" width="99%" />
      <img src="../assets/AngularJS.png" height="14%" width="99%" />
      <img src="../assets/Github.png" height="14%" width="99%" />
      <img src="../assets/Gitlab.png" height="14%" width="99%" />
    </v-card>

    <v-card id="cv" elevation="22">
      <h2 class="text-center">ALEXIS LEMAIRE</h2>
      <br />
      <div class="d-flex justify-content-around h-25 w-100">
        <div class="asideDesc">
          <div><strong>Diplôme:</strong> Bac +2 Développeur Web</div>
          <div><strong>Expérience:</strong> 4 mois en JS Fullstack</div>
          <div><strong>Recherche:</strong> CDD, CDI</div>
          <div><strong>Points forts:</strong> Déterminé, perfectionniste, prêt à apprendre de nouvelles technologies</div>
        </div>
        <hr class="v-separate" />
        <img src="../assets/newMoi(1).jpeg" width="25%" height="100%" />
        <hr class="v-separate" />
        <div class="asideDesc">
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
      <div>
        <v-btn v-for="(project, index) in projectList" :key="index" width="98%" @click="setSelectedProject(project)">
          {{ project.title }}
        </v-btn>
      </div>
    </v-card>

    <v-card class="skills" outlined>
      <img src="../assets/NodeJS.png" height="14%" width="99%" />
      <img src="../assets/Fastify.png" height="14%" width="99%" />
      <img src="../assets/ExpressJS.png" height="14%" width="99%" />
      <img src="../assets/PHP.jpg" height="14%" width="99%" />
      <img src="../assets/Symfony.png" height="14%" width="99%" />
      <img src="../assets/mySQL.png" height="14%" width="99%" />
      <img src="../assets/mongoDB.png" height="14%" width="99%" />
    </v-card>

    <v-dialog v-model="isOpenDialog">
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
import axios from "axios";
export default {
  data() {
    return {
      isOpenDialog: false,
      selectedProject: {},
      projectList: [],
    };
  },

  async created() {
    await this.getAllProject();
  },

  methods: {
    async getAllProject() {
      this.projectList = (await axios.get(`${process.env.API}/projects`)).data;
    },

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
  height: 650px;
  width: 80%;
}

.skills {
  padding: 0.5%;
  height: 650px;
  width: 9%;
}

.asideDesc {
  width: 30%;
}

h2 {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.v-btn {
  margin: 0.2%;
  margin-left: 1%;
  border: 2px solid blue;
}

.v-separate {
  width: 0.1%;
  height: 100%;
  border: solid 1px rgba(0, 0, 0, 0.1);
}
</style>
