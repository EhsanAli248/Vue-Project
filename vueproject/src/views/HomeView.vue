<template>
  <v-app>
  <!-- <hello-world /> -->
  <NavBar class="index"/>
  <dash-board/>
  <footer-view/>
</v-app>
</template>

<script>
  // import HelloWorld from '../components/HelloWorld'
  import NavBar from '../components/NavBar'
  import DashBoard from '../components/DashBoard'
  import FooterView from '../components/FooterView'

  export default {
    name: 'HomeView',

    components: {
      // HelloWorld,
      NavBar,
      DashBoard,
      FooterView,
    },
  }
</script>
<style scoped>
.index{
    z-index: 9999;
}
</style>
