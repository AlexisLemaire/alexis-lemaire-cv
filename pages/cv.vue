<template>
  <div class="d-flex justify-content-between p-3">
    <v-card class="skills" outlined>
      <img src="../assets/htmlCSSJS.png" height="14%" width="99%" />
      <img src="../assets/VueJS.jpg" height="14%" width="99%" />
      <img src="../assets/NuxtJS.png" height="14%" width="99%" />
      <img src="../assets/AngularJS.png" height="14%" width="99%" />
      <img src="../assets/JestCypress.png" height="14%" width="99%" />
      <img src="../assets/Github.png" height="14%" width="99%" />
      <img src="../assets/Gitlab.png" height="14%" width="99%" />
    </v-card>

    <cv-main v-if="!isResponsive" :project_list="projectList" />
    <cv-main-responsive v-if="isResponsive" :project_list="projectList" />

    <v-card class="skills" outlined>
      <img src="../assets/NodeJS.png" height="14%" width="99%" />
      <img src="../assets/Fastify.png" height="14%" width="99%" />
      <img src="../assets/ExpressJS.png" height="14%" width="99%" />
      <img src="../assets/PHP.jpg" height="14%" width="99%" />
      <img src="../assets/Symfony.png" height="14%" width="99%" />
      <img src="../assets/mySQL.png" height="14%" width="99%" />
      <img src="../assets/mongoDB.png" height="14%" width="99%" />
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      projectList: [],
      isResponsive: false,
    };
  },

  async created() {
    await this.getAllProject();
    // eslint-disable-next-line nuxt/no-globals-in-created
    if (window.screen.width < 960) {
      this.isResponsive = true;
    }
  },

  methods: {
    async getAllProject() {
      this.projectList = (await axios.get(`${process.env.API}/projects`)).data;
    },
  },
};
</script>

<style scoped>
.skills {
  padding: 0.5%;
  height: 650px;
  width: 9%;
}

@media screen and (max-width: 960px) {
  .skills {
    width: 25%;
  }
}
</style>
