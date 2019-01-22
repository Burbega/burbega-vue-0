<template>
  <div>
    <Delete :dialog2="dialog2" @dialog2Parent="dialog2False($event)"/>
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card-title class="headline blue lighten-1 white--text" primary-title>
          <div>
            <h1 class="display-4">Oi! Já não nos conhecemos?</h1>
          </div>
        </v-card-title>

        <v-card-text>
          <div class="font-weight-light headline">
            Fui criado durante o estudo sobre Vue e Vuetify, realizado pelo Rodrigo!
            Tenho links aqui embaixo que te levarão a conhecer tudo o que posso fazer!
            Vamos, experimente! Eu mal posso esperar :)
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-tooltip bottom>
            <v-btn slot="activator" color="primary" flat @click="dialog = false" router to="/">GET</v-btn>
            <span>Testar função GET</span>
          </v-tooltip>
          <v-tooltip bottom>
            <v-btn
              slot="activator"
              color="primary"
              flat
              @click="dialog = false"
              router
              to="/post"
            >POST</v-btn>
            <span>Testar função POST</span>
          </v-tooltip>
          <v-tooltip bottom>
            <v-btn
              slot="activator"
              color="primary"
              flat
              @click="dialog = false"
              router
              to="/put"
            >PUT</v-btn>
            <span>Testar função PUT</span>
          </v-tooltip>
          <v-tooltip bottom>
            <v-btn
              slot="activator"
              color="primary"
              flat
              @click="dialog = false"
              router
              to="/patch"
            >PATCH</v-btn>
            <span>Testar função PATCH</span>
          </v-tooltip>
          <v-tooltip bottom>
            <v-btn
              slot="activator"
              color="primary"
              flat
              @click="dialog=false, dialog2 = true"
            >DELETE</v-btn>
            <span>Testar função DELETE</span>
          </v-tooltip>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
      dialog: true,
      dialog2: false
    };
  },
  methods: {
    dialog2False: function(updatedDialog2) {
      this.dialog2 = updatedDialog2;
    }
  }
};
</script>