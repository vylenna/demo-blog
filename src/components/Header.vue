<template>
  <header class="masthead">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-md-10 mx-auto">
          <div class="site-heading">
            <h1 class="font-weight-bold">Demo-blog for practice</h1>
            <span class="subheading">using airbnb codestyle</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped lang="scss">
  header.masthead {
    margin-bottom: 50px;
    background: url("../assets/main_back.png") no-repeat center center;
    position: relative;
    background-size: cover;
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: #aaaaaa;
      opacity: 0.5;
    }
    .site-heading {
      padding: 200px 0 150px;
      color: white;
      @media only screen and (min-width: 768px) {
        padding: 200px 0;
      }
    }
    .site-heading {
      text-align: center;
      h1 {
        font-size: 50px;
        margin-top: 0;
      }
      .subheading {
        font-size: 24px;
        font-weight: 300;
        line-height: 1.1;
        display: block;
        margin: 10px 0 0;
      }
      @media only screen and (min-width: 768px) {
        h1 {
          font-size: 80px;
        }
      }
    }
  }
</style>
