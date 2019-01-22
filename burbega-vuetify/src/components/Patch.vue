<template>
  <v-layout
    style="background: rgba(0, 0, 0, 0) linear-gradient(rgb(24, 103, 192), rgb(92, 187, 246));"
  >
    <div class="container page">
      <h3
        class="display-4 white--text"
        style="text-align: center; margin-bottom: 24px; margin-top: 80px"
      >Testando PATCH</h3>
      <h6
        class="display-3 font-weight-thin font-italic white--text"
        style="text-align: center; margin-bottom: 24px;"
      >vue-resource REST</h6>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <div id="patch">
            <v-card-title v-if="!submitted" class="headline" primary-title>Execute um Novo Patch</v-card-title>
            <v-card-text>
              <v-form v-if="!submitted" ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model.lazy="blog"
                  :counter="10"
                  :rules="nameRules"
                  label="Título do Patch"
                  required
                ></v-text-field>

                <v-btn color="success" @click.prevent="patch" :loading="loading">Executar PATCH</v-btn>
              </v-form>

              <div v-if="submitted">
                <h5
                  class="headline"
                  style="margin-bottom: 10px"
                >Obrigado por testar a função de PATCH!</h5>

                <h6 class="title" style="margin-bottom: 20px">PATCH executado com sucesso</h6>

                <div class="body-1" style="margin-bottom: 8px">UserId do PATCH: {{ blog.userId }}</div>
                <div class="body-1" style="margin-bottom: 8px">Id do PATCH: {{ blog.id }}</div>
                <div class="body-1" style="margin-bottom: 8px">Título do PATCH: {{ blog.title }}</div>
                <div class="body-1" style="margin-bottom: 8px">Corpo do PATCH: {{ blog.body }}</div>
              </div>
            </v-card-text>
          </div>
          <v-snackbar v-model="snackbar" :timeout="6000" top>
            {{ text }}
            <v-btn color="pink" flat @click="snackbar = false">Fechar</v-btn>
          </v-snackbar>
        </v-card>
      </v-flex>
    </div>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      blog: "",
      loading: false,
      submitted: false,
      snackbar: false,
      y: "top",
      x: null,
      mode: "",
      timeout: 6000,
      text: "A função de PATCH foi executada com sucesso!"
    };
  },
  methods: {
    //vue-resource PATCH REST
    patch: function() {
      this.loading = true;
      this.$http
        .patch("https://jsonplaceholder.typicode.com/posts/1", {
          title: this.blog
        })
        .then(function(data) {
          this.submitted = true;
          this.loading = false;
          this.snackbar = true;
          this.blog = data.body;
        });
    }
  }
};
</script>