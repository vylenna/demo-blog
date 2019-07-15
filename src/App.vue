<template>
  <div id="app">
    <Navigation/>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Footer,
    Header,
    Navigation,
  },
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
