<template>
  <v-app>
  <div id="app">
    <div> <Navigation /> </div>
      <div>
        <transition name="fade">
        <router-view></router-view>
        </transition>
      </div>
    <div> <Footer /> </div>
  </div>
  </v-app>
</template>

<script>

import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',

  components: {
    Navigation,
        Footer
  },

  data: () => ({
    //
  }),
};
</script>
