<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app color="primary" dark>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> with Vue & Vuetity </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/about">
          <v-list-item-icon>
            <v-icon>mdi-help-circle-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group :value="false" prepend-icon="mdi-palette" active-class="white--text">
          <template v-slot:activator>
            <v-list-item-title>Styles</v-list-item-title>
          </template>
          <v-list-item to="/styles/textandtypography" color="white">
            <v-list-item-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Text and Typography</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/styles/spacing" color="white">
            <v-list-item-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Margin and Padding</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-item to="/gridsystem">
          <v-list-item-icon>
            <v-icon>mdi-view-grid-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Grid System</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Collapsing Bar</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app color="primary" dark>
      <div class="mx-auto">Hyundai vue.js vuetify</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      drawer: false
    };
  },
  methods: {},
};
</script>

<style scoped></style>
