<template>
  <v-app>
    <nav class="d-flex justify-content-around">
      <v-btn to="/cv" width="32%">CV</v-btn>
      <v-btn width="32%" @click="openMotivationDialog = !openMotivationDialog">Motivations</v-btn>
      <v-btn to="/addProject" width="32%">Ajout projet</v-btn>
    </nav>

    <v-main>
      <Nuxt />
    </v-main>

    <v-dialog v-model="openMotivationDialog">
      <v-card class="p-4" outlined>
        <h3 class="text-center">Lettre de motivation</h3>
        Bonjour,
        <br /><br />
        Je cherche un poste de Développeur Web Junior, Fullstack, Backend ou Frontend dans lequel je pourrais enrichir mon stack
        technique d'une seconde expérience professionnelle après une expérience réussie sur du Javascript Fullstack.
        <br /><br />
        Ayant déjà prouvé que je pouvais apprendre de nouvelles technologies très rapidement, et étant doté d'une forte détermination,
        j'espère que mon manque d'expérience en entreprise ne vous effraiera pas sur mon potentiel et mes compétences car je suis
        certain de pouvoir vous prouver assez rapidement de quoi je suis capable. Concernant la culture d'équipe dont je fais preuve,
        j'aime régler les problèmes de la façon la plus rationnelle et efficace possible, plutôt que de rajouter d'autres problèmes à
        ceux qui existent déjà. Je suis aussi partisan du leit motiv "du code plutôt que du blabla".
        <br /><br />
        Enfin, je préférerais travailler sur les technologies suivantes : Vue.js, Nuxt, Angular, Node.js, MySQL, MongoDB, PHP, Symfony.
        Cependant, je ne suis pas fermé à une entreprise qui voudrait que je me forme en Laravel, Python, ou React pour répondre aux
        besoins du stack utilisé.
        <br /><br />
        J'espère que cette description saura vous plaire, merci d'avance à vous.
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      openMotivationDialog: false,
    };
  },
};
</script>

<style scoped>
.v-alert {
  margin: 1%;
}

.v-btn {
  background-color: rgb(185, 185, 240) !important;
}

.v-btn:hover {
  background-color: lawngreen !important;
}
</style>
