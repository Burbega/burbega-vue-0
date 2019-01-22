<template>
  <v-app class="grey lighten-4">
    <NavBar/>
    <StarterDialog/>
    <v-content>
      <router-view/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import StarterDialog from "./components/StarterDialog";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    NavBar,
    StarterDialog,
    Footer
  },
  data() {
    return {
      //
    };
  }
};
</script>
