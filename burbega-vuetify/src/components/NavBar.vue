<template>
  <nav>
    <Delete :dialog2="dialog2" @dialog2Parent="dialog2 = false"/>
    <v-toolbar flat app>
      <v-tooltip bottom>
        <v-toolbar-side-icon slot="activator" @click="drawer = !drawer"></v-toolbar-side-icon>
        <span>Menu de funções</span>
      </v-tooltip>
      <v-toolbar-title>
        <span class="font-weight-light">PROJETO</span>Vuetify
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-tooltip bottom>
          <v-btn slot="activator" flat router to="/">GET</v-btn>
          <span>Testar função GET</span>
        </v-tooltip>
        <v-tooltip bottom>
          <v-btn slot="activator" flat router to="/post">POST</v-btn>
          <span>Testar função POST</span>
        </v-tooltip>
        <v-tooltip bottom>
          <v-btn slot="activator" flat router to="/put">PUT</v-btn>
          <span>Testar função PUT</span>
        </v-tooltip>
        <v-tooltip bottom>
          <v-btn slot="activator" flat router to="/patch">PATCH</v-btn>
          <span>Testar função PATCH</span>
        </v-tooltip>
        <v-tooltip bottom>
          <v-btn slot="activator" flat @click="dialog2 = true">DELETE</v-btn>
          <span>Testar função DELETE</span>
        </v-tooltip>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img class="text-lg-center" src="\LoL_Facebook_Icon_23.png">
          </v-avatar>
          <p class="subheading mt-1">Burbega Vuetify</p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-tooltip bottom>
          <v-list-tile slot="activator" router to="/">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>GET</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <span>Testar função GET</span>
        </v-tooltip>

        <v-tooltip bottom>
          <v-list-tile slot="activator" router to="/post">
            <v-list-tile-action>
              <v-icon>event_note</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>POST</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <span>Testar função POST</span>
        </v-tooltip>

        <v-tooltip bottom>
          <v-list-tile slot="activator" router to="/put">
            <v-list-tile-action>
              <v-icon>border_color</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>PUT</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <span>Testar função PUT</span>
        </v-tooltip>

        <v-tooltip bottom>
          <v-list-tile slot="activator" router to="/patch">
            <v-list-tile-action>
              <v-icon>border_color</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>PATCH</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <span>Testar função PATCH</span>
        </v-tooltip>

        <v-tooltip bottom>
          <v-list-tile slot="activator" @click="dialog2 = true">
            <v-list-tile-action>
              <v-icon>delete</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>DELETE</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <span>Testar função DELETE</span>
        </v-tooltip>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
//import: componente filho Delete.vue
import Delete from "./Delete.vue";

export default {
  components: {
    Delete
  },
  data() {
    return {
      drawer: false,
      dialog2: false
    };
  }
};
</script>