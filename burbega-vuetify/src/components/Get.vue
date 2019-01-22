<template>
  <v-layout
    style="background: rgba(0, 0, 0, 0) linear-gradient(rgb(24, 103, 192), rgb(92, 187, 246));"
  >
    <div class="container page">
      <h3
        class="display-4 white--text"
        style="text-align: center; margin-bottom: 24px; margin-top: 80px"
      >Testando GET</h3>

      <h6
        class="display-3 font-weight-thin font-italic white--text"
        style="text-align: center; margin-bottom: 24px;"
      >vue-resource REST</h6>
      <v-flex xs12 sm6 offset-sm3>
        <v-card
          style="margin-bottom: 20px"
          hover
          raised
          v-for="blog in blogs"
          :key="blog"
          max-width="800px"
        >
          <v-card-title class="headline" primary-title>{{ blog.title }}</v-card-title>
          <v-card-text>{{ blog.body }}</v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-flex>
    </div>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      blogs: []
    };
  },
  created() {
    //vue-resource GET REST
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        this.blogs = data.body.slice(0, 10);
      });
  }
};
</script>