<template>
  <div>
    <v-dialog v-model="dialog2" max-width="600px">
      <v-card>
        <v-card-title class="headline blue lighten-1 white--text" primary-title>
          <div>
            <h1 class="display-3">DELETE executado com sucesso!</h1>
          </div>
        </v-card-title>
        <v-card-text>
          A função de fake DELETE, assim como todas as outras aqui,
          são executadas utilizando o site jsonplaceholder!
        </v-card-text>
        <v-btn flat @click="dialog2 = false, $emit('dialog2Parent')">Fechar</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["dialog2"],
  data() {
    return {
      loading: false
    };
  },
  methods: {
    //vue-resource DELETE REST
    delete: function() {
      this.$http
        .delete("https://jsonplaceholder.typicode.com/posts/1", {})
        .then(function() {});
    }
  }
};
</script>