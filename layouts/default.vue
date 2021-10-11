<template>
  <v-app>
    <div class="d-flex justify-content-around">
      <v-btn to="/cv" width="32%" dark>CV</v-btn>
      <v-btn width="32%" dark @click="openMotivationDialog = !openMotivationDialog">Lettre de motivation</v-btn>
      <v-btn to="/addProject" width="32%" dark>Ajouter un projet</v-btn>
    </div>
    <v-main>
      <Nuxt />
    </v-main>

    <v-dialog v-model="openMotivationDialog">
      <v-card class="p-4" outlined>
        <h3 class="text-center">Lettre de motivation</h3>
        Bonjour,
        <br /><br />
        Je cherche un poste de Développeur Web Junior, Fullstack, Backend ou Frontend dans lequel je pourrais enrichir mon stack
        technique d'une seconde expérience professionnelle après une expérience réussie de 4 Mois en JS Fullstack.
        <br /><br />
        Ayant déjà prouvé que je pouvais apprendre de nouvelles technologies très rapidement, et étant doté d'une forte détermination,
        j'espère que mon manque d'expérience en entreprise ne vous effraiera pas sur mon potentiel et mes compétences car je suis
        certain de pouvoir vous prouver assez rapidement de quoi je suis capable. Concernant la culture d'équipe attendue, je me montre
        moi-même le plus sympathique et à l'écoute que je puisse être, j'aime à régler les problèmes de la façon la plus rationnelle
        possible, plutôt que de rajouter d'autres problèmes à ceux qui existent déjà.
        <br /><br />
        Enfin, je préférerais travailler sur les technologies suivantes : Vue 2|3, Nuxt, Angular 12, Node (Fastify, Express, Koa),
        MySQL/MongoDB, PHP (Symfony 5). Cependant, je ne suis pas fermé à une entreprise qui voudrait que je me forme en Laravel,
        Python, ou React pour répondre aux besoins du stack utilisé.
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

<style>
.v-alert {
  margin: 1%;
}
</style>
