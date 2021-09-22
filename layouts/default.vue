<template>
  <v-app>
    <v-btn width="10%" @click="isOpenNavDrawer = !isOpenNavDrawer">
      <v-icon class="mx-2">mdi-menu</v-icon> Navigation
    </v-btn>
    <v-navigation-drawer v-model="isOpenNavDrawer" app>
      <v-list>
        <v-list-item @click="isOpenNavDrawer = !isOpenNavDrawer">
          <v-icon class="mx-2">mdi-menu</v-icon> Navigation
        </v-list-item>
        <v-list-item> test </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isOpenNavDrawer: false,
    };
  },
};
</script>
