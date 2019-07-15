<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="index.html">Start Bootstrap</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
              aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'contact' }">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped lang="scss">
  #mainNav {
    position: absolute;
    border-bottom: 1px solid #353535;
    background-color: white;
    .navbar-brand {
      font-weight: 800;
      color: #121212;
    }
    .navbar-toggler {
      font-size: 12px;
      font-weight: 800;
      padding: 13px;
      text-transform: uppercase;
      color: #252525;
    }
    .navbar-nav {
      > li.nav-item {
        > .nav-link {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
        }
      }
    }
    @media only screen and (min-width: 992px) {
      border-bottom: 1px solid transparent;
      background: transparent;
      .navbar-brand {
        padding: 10px 20px;
        color: #000;
        &:focus,
        &:hover {
          color: fade-out(#000, .3);
        }
      }
      .navbar-nav {
        > li.nav-item {
          > .nav-link {
            padding: 10px 20px;
            color: #555;
            &:focus,
            &:hover {
              color: #4a4;
            }
          }
        }
      }
    }
    @media only screen and (min-width: 992px) {
      -webkit-transition: background-color 0.2s;
      -moz-transition: background-color 0.2s;
      transition: background-color 0.2s;
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      -webkit-backface-visibility: hidden;
      &.is-fixed {
        position: fixed;
        top: -67px;
        -webkit-transition: -webkit-transform 0.2s;
        -moz-transition: -moz-transform 0.2s;
        transition: transform 0.2s;
        border-bottom: 1px solid darken(#000, .05);
        background-color: fade-out(#000, .1);
        .navbar-brand {
          color: darkcyan;
          &:focus,
          &:hover {
            color: darkred;
          }
        }
        .navbar-nav {
          > li.nav-item {
            > a {
              color: darkcyan;
              &:focus,
              &:hover {
                color: darkred;
              }
            }
          }
        }
      }
      &.is-visible {
        -webkit-transform: translate3d(0, 100%, 0);
        -moz-transform: translate3d(0, 100%, 0);
        -ms-transform: translate3d(0, 100%, 0);
        -o-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }
    }
  }
</style>
