<template>
  <div class="d-flex justify-content-between p-3">
    <v-card class="skills" outlined>
      <img src="../assets/htmlCSSJS.png" />
      <hr />
      <img src="../assets/VueJS.jpg" />
      <hr />
      <img src="../assets/NuxtJS.png" />
      <hr />
      <img src="../assets/AngularJS.png" />
      <hr />
      <img src="../assets/JestCypress.png" />
      <hr />
      <img src="../assets/Github.png" />
      <hr />
      <img src="../assets/Gitlab.png" />
    </v-card>

    <v-card id="cv" elevation="22">
      <h2 class="text-center">ALEXIS LEMAIRE: DEV WEB FULLSTACK</h2>
      <p class="text-center text-secondary">Adresse du site: https://alexis-lemaire-cv.herokuapp.com/</p>

      <div class="d-flex justify-content-around">
        <div class="asideDesc">
          <div><strong>Diplôme:</strong> Bac +2 Développeur Web</div>
          <div><strong>Expérience:</strong> 5 mois</div>
          <div><strong>Recherche:</strong> CDD, CDI</div>
          <div><strong>Point fort:</strong> Organisateur</div>
          <div><strong>Langues:</strong> Français, Anglais</div>
        </div>
        <img src="../assets/newMoi(1).jpeg" />
        <div class="asideDesc">
          <div><strong>Âge:</strong> 23 ans</div>
          <div><strong>Mobilité:</strong> Nord-Ouest (Orléans, Tours, Rennes)</div>
          <div><strong>Email:</strong> alexisethan.lemaire@gmail.com</div>
          <a href="https://github.com/AlexisLemaire">Github</a> <br />
          <a href="https://www.linkedin.com/in/alexis-lemaire-7b9882212/">Linkedin</a>
        </div>
      </div>

      <hr />
      <div>
        <h5 class="text-center">Présentation</h5>
        <p>
          Bonjour, je suis un Développeur Web Junior en recherche d'expérience. Je suis apte et intéressé pour faire aussi bien du
          Backend, que du Frontend ou du Fullstack. Mon profil est celui d'un <strong>organisateur.</strong> Lorsque je développe sur
          des projets, que ce soit les miens ou des projets pour des tiers, j'aime que
          <strong>la structure du projet et du code au sein de chaque fichier soit la plus claire et la plus légère possible.</strong>
          J'aime que le travail nécessaire soit effectué avec le moins de code qu'il se peut, afin que la maintenance ou l'amélioration
          des projets puisse se faire de façon simple. Enfin, je suis quelqu'un de plutôt motivé et travailleur au quotidien, je n'aime
          pas laisser des tâches sur le tas, c'est pourquoi j'ai tendance à travailler beaucoup afin de pouvoir répondre aux défis que
          je me propose.
        </p>
      </div>

      <hr />
      <div>
        <h5 class="text-center">Projets & Expériences</h5>
        <div>
          Ci-dessous, vous retrouverez la liste des projets que j'ai choisi de publier sur internet. De nombreux side-projects qui
          n'ont jamais vu le jour ou que j'ai trouvé trop décevants n'y apparaissent pas, les plus anciens datent de Mars 2021.
          <strong>Cliquez sur un projet pour voir le détail</strong>
        </div>
        <br />
        <v-btn v-for="(project, index) in projectList" :key="index" @click="setSelectedProject(project)">
          {{ project.title }} | {{ project.date }} | Client: {{ project.Client }}
        </v-btn>
      </div>

      <hr />
      <div>
        <h5 class="text-center">Compétences Informatiques</h5>
        <div class="d-flex justify-content-around">
          <div class="competences">
            · API Rest <br />
            · Intégration continue: CI Gitlab-hub <br />
            · Tests Unitaires / End-to-End <br />
            · Méthodologies TDD/MVC/SCRUM <br />
            · Protocole HTTP <br />
          </div>
          <div class="competences">
            · Javascript <br />
            · Typescript <br />
            · Vue.js <br />
            · Angular <br />
            · Node.js <br />
          </div>
        </div>
        <hr class="competencesHR" />
        <div class="d-flex justify-content-around">
          <div class="competences">
            · HTML <br />
            · CSS <br />
            · Bootstrap <br />
            · Librairies UI (Angular Materials, Vuetify..) <br />
            · Wordpress (Débutant) <br />
          </div>
          <div class="competences">
            · PHP 8 <br />
            · Symfony 5 <br />
            · Github <br />
            · Gitlab <br />
            · RabbitMQ (Débutant) <br />
          </div>
        </div>
      </div>
    </v-card>

    <v-dialog v-model="isOpenDialog">
      <v-card class="p-4">
        <h3 class="text-center">{{ selectedProject.title }}</h3>
        <v-card-subtitle class="text-center"> {{ selectedProject.date }} </v-card-subtitle>
        <div>{{ selectedProject.description }}</div>
        <br />
        <strong>Client: </strong> {{ selectedProject.Client }} <br />
        <strong>Développement: </strong> {{ selectedProject.dev }} <br />
        <strong>Frontend:</strong> {{ selectedProject.frontendTech }} <br />
        <strong>Backend:</strong> {{ selectedProject.backendTech }} <br /><br />
        <div class="text-center">
          <a :href="selectedProject.link" target="_blank"><v-btn>Site</v-btn></a>
          <a :href="selectedProject.github" target="_blank"><v-btn>Github</v-btn></a>
          <a :href="selectedProject.githubAPI" target="_blank"><v-btn>Github API</v-btn></a>
          <v-btn :to="'/changeProject/' + selectedProject.id"><v-icon>mdi-cog</v-icon></v-btn>
          <v-btn :to="'/deleteProject/' + selectedProject.id"><v-icon>mdi-delete-empty</v-icon></v-btn>
        </div>
      </v-card>
    </v-dialog>

    <v-card class="skills" outlined>
      <img src="../assets/NodeJS.png" />
      <hr />
      <img src="../assets/Fastify.png" />
      <hr />
      <img src="../assets/ExpressJS.png" />
      <hr />
      <img src="../assets/PHP.jpg" />
      <hr />
      <img src="../assets/Symfony.png" />
      <hr />
      <img src="../assets/mySQL.png" />
      <hr />
      <img src="../assets/mongoDB.png" />
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      projectList: [],
      selectedProject: {},
      isOpenDialog: false,
    };
  },

  created() {
    this.getAllProject();
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
.skills {
  padding: 1%;
  width: 9%;
  height: 1000px;
}

.skills img {
  height: 11%;
  width: 100%;
}

#cv {
  padding: 1%;
  margin: 1%;
  width: 98%;
}

#cv img {
  width: 25%;
  height: 60%;
}

.asideDesc {
  width: 28%;
  margin: 2%;
}

.competences {
  width: 31%;
  border: 4px double black;
  padding: 1%;
}

.competencesHR {
  margin-left: 30%;
  width: 40%;
}

.v-btn {
  width: 98%;
  padding: 1%;
  margin-left: 1%;
  margin-top: 0.5%;
  box-shadow: 2px 3px 3px grey;
  border: 2px solid black;
  border-radius: 5%;
  font-weight: bold;
}

.v-btn:hover {
  background-color: chartreuse !important;
}

.v-dialog a,
.v-dialog .v-btn {
  width: 15%;
  text-decoration: none;
}

@media screen and (max-width: 960px) {
  .skills {
    width: 25%;
  }
}
</style>
