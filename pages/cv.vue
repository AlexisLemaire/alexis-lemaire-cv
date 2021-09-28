<template>
  <div class="d-flex justify-content-between p-3">
    <v-card class="skills" outlined>
      <img src="../assets/htmlCSSJS.png" height="16%" width="99%" />
      <img src="../assets/VueJS.jpg" height="16%" width="99%" />
      <img src="../assets/VuetifyJS.png" height="16%" width="99%" />
      <img src="../assets/NuxtJS.png" height="16%" width="99%" />
      <img src="../assets/AngularJS.png" height="16%" width="99%" />
      <img src="../assets/Github.png" height="16%" width="99%" />
    </v-card>

    <v-card id="cv" elevation="22">
      <h2 class="text-center">ALEXIS LEMAIRE</h2>
      <br />
      <div class="d-flex justify-content-around h-25 w-100">
        <div class="w-25">
          <div>BAC +2 Développeur Web & Web Mobile</div>
          <div>Recherche un CDD, CDI</div>
          <div>Déterminé, perfectionniste, prêt à apprendre de nouvelles technologies</div>
        </div>
        <hr class="v-separate" />
        <img src="../assets/newMoi(1).jpeg" width="25%" height="100%" />
        <hr class="v-separate" />
        <div>
          <div>23 ans</div>
          <div>381 Les Etangs de Béon, 45210 Bazoches-sur-le-Betz</div>
          <div>alexisethan.lemaire@gmail.com</div>
          <div>06 73 34 01 72</div>
        </div>
      </div>
      <br />
      <hr />
      <h5 class="text-center">Compétences Notables: Pipelines Gitlab, tests unitaires en JS & PHP, Bootstrap, principes AGILE/ACID</h5>
      <hr />
      <h4 class="text-center">Projets</h4>
      <div>
        <v-btn v-for="(project, index) in projectList" :key="index" width="98%" dark @click="setSelectedProject(project)">
          {{ project.title }}
        </v-btn>
      </div>
    </v-card>

    <v-card class="skills" outlined>
      <img src="../assets/NodeJS.png" height="16%" width="99%" />
      <img src="../assets/PHP.jpg" height="16%" width="99%" />
      <img src="../assets/Symfony.png" height="16%" width="99%" />
      <img src="../assets/mySQL.png" height="16%" width="99%" />
      <img src="../assets/mongoDB.png" height="16%" width="99%" />
      <img src="../assets/Gitlab.png" height="16%" width="99%" />
    </v-card>

    <v-dialog v-model="isOpenDialog">
      <v-card class="p-4">
        <h3 class="text-center">{{ selectedProject.title }}</h3>
        <v-card-subtitle class="text-center"> {{ selectedProject.date }} </v-card-subtitle>
        <div>{{ selectedProject.description }}</div>
        <br />
        <div class="text-center">
          <v-btn><a :href="selectedProject.link">Site</a></v-btn>
          <v-btn><a :href="selectedProject.github">Github</a></v-btn>
          <v-btn :to="'/changeProject/' + selectedProject.id"><v-icon>mdi-cog</v-icon></v-btn>
        </div>
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
      this.projectList = (await axios.get(`${process.env.herokuAPI}/projects`)).data;
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
  font-size: 13px;
  padding: 0.5%;
  height: 650px;
  width: 80%;
}

.skills {
  padding: 0.5%;
  height: 650px;
  width: 9%;
}

img {
  margin-bottom: 1%;
}

.v-btn {
  margin: 1%;
}

.v-separate {
  width: 0.1%;
  height: 100%;
  border: solid 1px rgba(0, 0, 0, 0.1);
}
</style>
