<template>
  <v-app>
    <div class="d-flex justify-content-around">
      <v-btn to="/cv" width="32%" dark>CV</v-btn>
      <v-btn @click="openMotivationDialog = !openMotivationDialog" width="32%" dark>Lettre de motivation</v-btn>
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
        technique et mon expérience professionnelle.
        <br />
        Ayant une forte détermination, et pensant pouvoir rapidement apprendre de nouvelles technologies, j'attendrais de l'entreprise
        qu'elle me rémunère à la hauteur de ce que je sais faire sur le long terme.
        <br />
        Concernant la culture d'équipe attendue, je me montre moi-même le plus sympathique et à l'écoute que je puisse être, j'aime à
        régler les problèmes de la façon la plus rationnelle possible, plutôt que de rajouter d'autres problèmes à ceux qui existent
        déjà.
        <br /><br />
        Enfin, je préférerais travailler sur les technologies suivantes : VueJS (Nuxt), NodeJS (Fastify, Express, Koa), MySQL/MongoDB,
        PHP (Symfony).
        <br />
        Je ne suis pas fermé à une entreprise qui voudrait que je me forme en Python, React ou Angular pour répondre aux besoins du
        stack utilisé.
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
