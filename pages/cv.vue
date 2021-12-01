<template>
  <div class="d-flex justify-content-between p-3">
    <v-card id="cv" elevation="22">
      <h2 class="text-center">ALEXIS LEMAIRE: DEV WEB FULLSTACK</h2>
      <p class="text-center text-secondary">https://alexis-lemaire-cv.herokuapp.com/</p>

      <entete class="d-none d-md-flex justify-content-around" />
      <enteteResponsive class="d-md-none" />

      <hr />
      <div>
        <h5 class="text-center">Présentation</h5>
        <p>
          Bonjour, je suis un Développeur Web Junior en recherche d'expérience. Je suis intéressé par toutes les facettes du
          développement web (Back, Front, Tests). Mon profil est celui d'un organisateur. Lorsque je développe sur projets, j'aime que
          la structure du projet et du code au sein de chaque fichier soit la plus claire et la plus légère possible possible afin que
          la maintenance ou l'amélioration des projets puisse se faire de façon simple.

          <br /><br />

          Humainement, je suis quelqu'un d'assez motivé au travail, je n'ai jamais déçu aucun employeur sur ma quantité de travail
          fournie. Je pense que ma qualité principale est ma rapidité d'apprentissage. Cherchant à performer le plus possible dans le
          domaine du développement web, je me sais capable (et mon expérience le prouve) d'apprendre très rapidement de nouvelles
          technos ou de corriger mes points faibles sur celles que j'utilise déjà.

          <br /><br />

          Enfin, cherchant avant tout de l'expérience dans le domaine du dev web, je suis souple concernant mes attentes salariales et
          professionnelles.
        </p>
      </div>

      <hr />
      <div>
        <h5 class="text-center">Expériences</h5>
        <p>
          <strong>Digital Expert : Septembre 2021 à Novembre 2021</strong> <br />
          · Apprentissage des bonnes pratiques pour créer un projet web (structure, gestion des dépendances) <br />
          · Mise en place des tests automatisés pour assurer la non-régression des projets lors des déploiements <br />
          · Mise en place d'une API Rest avec le framework Node.js Fastify <br />
          · Mise en place d'une interface web avec le framework Vue.js <br />
          · Utilisation de la méthodologie SCRUM <br /><br />
          <strong>Projets scolaires & personnels : Mai 2021 à Septembre 2021</strong> <br />
          · Apprentissage des bases du développement javascript fullstack (architecture Node, architecture des frameworks frontend)<br />
          · Apprentissage des bases du développement PHP Symfony <br />
          · Mise en place de solutions de base de données (SQLite, MySQL, MongoDB) <br />
        </p>
      </div>

      <hr />
      <competences class="d-none d-sm-block" />
      <competencesResponsive class="d-sm-none" />

      <hr />
      <div class="text-center">
        <h5>Projets</h5>
        <div>
          Ci-dessous, vous retrouverez la liste des projets que j'ai choisi de publier sur mon CV.
          <strong>Cliquez sur un projet pour voir le détail</strong>
        </div>
        <br />
        <v-btn v-for="(project, index) in projectList" :key="index" @click="setSelectedProject(project)">
          {{ project.date }} : {{ project.title }}
        </v-btn>
      </div>
    </v-card>

    <v-dialog v-model="isOpenDialog">
      <v-card class="p-4">
        <h3 class="text-center">{{ selectedProject.title }}</h3>
        <v-card-subtitle class="text-center"> {{ selectedProject.date }} </v-card-subtitle>
        <div>{{ selectedProject.description }}</div>
        <br />
        <strong>Client: </strong> {{ selectedProject.client }} <br />
        <strong>Développement: </strong> {{ selectedProject.dev }} <br />
        <strong>Technos Frontend:</strong> {{ selectedProject.frontendTech }} <br />
        <strong>Technos Backend:</strong> {{ selectedProject.backendTech }} <br />
        <strong>Responsive: </strong> {{ selectedProject.responsive }} <br /><br />
        <div class="text-center">
          <a :href="selectedProject.link" target="_blank"><v-btn>Site</v-btn></a>
          <a :href="selectedProject.github" target="_blank"><v-btn>Github</v-btn></a>
          <a :href="selectedProject.githubAPI" target="_blank"><v-btn>Github API</v-btn></a>
          <v-btn :to="'/changeProject/' + selectedProject.id"><v-icon>mdi-cog</v-icon></v-btn>
          <v-btn :to="'/deleteProject/' + selectedProject.id"><v-icon>mdi-delete-empty</v-icon></v-btn>
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
      projectList: [],
      selectedProject: {},
      isOpenDialog: false,
    };
  },

  async created() {
    await this.getAllProject();
    for (const project of this.projectList) {
      project.date = await this.setMonthDate(project.date);
    }
  },

  methods: {
    async getAllProject() {
      this.projectList = (await axios.get(`${process.env.API}/projects`)).data;
    },

    setSelectedProject(project) {
      this.isOpenDialog = !this.isOpenDialog;
      this.selectedProject = project;
    },

    setMonthDate(date) {
      let numMois = date.substring(5, 7);
      const firstNum = numMois.substring(0, 1);
      if (firstNum === "0") {
        numMois = numMois.substring(1);
      }
      const annee = date.substring(0, 4);
      const calendrier = [
        "Handle0",
        "Janvier",
        "Fevrier",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Decembre",
      ];
      return `${calendrier[numMois]} ${annee}`;
    },
  },
};
</script>

<style scoped>
#cv {
  padding: 2%;
}

hr {
  border-top: solid 1px #000 !important;
  margin-top: 2%;
  margin-bottom: 2%;
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
  width: 11%;
  text-decoration: none;
}

@media screen and (max-width: 960px) {
  .skills {
    display: none;
  }

  #cv {
    padding: 8%;
  }

  #cv .v-btn {
    font-size: 70%;
  }

  .v-dialog a,
  .v-dialog .v-btn {
    width: 100% !important;
    display: block;
  }
}
</style>
