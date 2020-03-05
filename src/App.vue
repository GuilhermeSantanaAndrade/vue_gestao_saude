<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app clipped>
        <v-list dense>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>home</v-icon>
            </v-list-item-action>
            <v-list-item-content @click="navigate('Home')">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>settings_ethernet</v-icon>
            </v-list-item-action>
            <v-list-item-content @click="navigate('ClientesConsultar')">
              <v-list-item-title>Clientes</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar color="#005883" app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title id="title">Gestão de Planos de Saúde</v-toolbar-title>
      </v-app-bar>

      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <router-view></router-view>
          </v-row>
        </v-container>
      </v-content>

      <v-footer app> </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = false;
  },
  methods: {
    navigate(destiny) {
      this.$router.push({ name: destiny });
    }
  }
};
</script>

<style scoped>
#title {
  color: #ffffff;
}
</style>
