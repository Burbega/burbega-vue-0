<template>
  <v-layout
    style="background: rgba(0, 0, 0, 0) linear-gradient(rgb(24, 103, 192), rgb(92, 187, 246));"
  >
    <div class="container page">
      <h3
        class="display-4 white--text"
        style="text-align: center; margin-bottom: 24px; margin-top: 80px"
      >Testando POST</h3>
      <h6
        class="display-3 font-weight-thin font-italic white--text"
        style="text-align: center; margin-bottom: 24px;"
      >vue-resource REST</h6>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <div id="post">
            <v-card-title v-if="!submitted" class="headline" primary-title>Execute um Novo Post</v-card-title>
            <v-card-text>
              <v-form v-if="!submitted" ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model.lazy="blog.title"
                  :counter="10"
                  :rules="nameRules"
                  label="Título do Post"
                  required
                ></v-text-field>
                <v-text-field
                  v-model.lazy="blog.body"
                  :rules="nameRules"
                  label="Conteúdo do Post"
                  required
                ></v-text-field>

                <v-select v-model="blog.userId" :items="usersIds" label="UserId" required></v-select>

                <v-btn color="success" @click.prevent="post" :loading="loading">Executar POST</v-btn>
              </v-form>

              <div v-if="submitted">
                <h5
                  class="headline"
                  style="margin-bottom: 10px"
                >Obrigado por testar a função de POST!</h5>

                <h6 class="title" style="margin-bottom: 20px">POST executado com sucesso</h6>
                <div class="body-1" style="margin-bottom: 8px">Título do Post: {{ blog.title }}</div>
                <div class="body-1" style="margin-bottom: 8px">Corpo do Post: {{ blog.body }}</div>
                <div class="body-1" style="margin-bottom: 8px">Id do Post: {{ blog.id }}</div>

                <div class="body-1">UserId: {{ blog.userId }}</div>
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
      blog: {
        title: "",
        body: "",
        id: "",
        userId: ""
      },
      loading: false,
      select: null,
      usersIds: ["Bart", "BugHead", "Vaan"],
      submitted: false,
      snackbar: false,
      y: "top",
      x: null,
      mode: "",
      timeout: 6000,
      text: "A função de POST foi executada com sucesso!"
    };
  },
  methods: {
    //vue-resource POST REST
    post: function() {
      this.loading = true;
      this.$http
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.body,
          userId: this.blog.userId
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