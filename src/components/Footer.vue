<template>
  <footer class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <ul class="list-inline text-center">
          <li class="list-inline-item">
            <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                </span>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
            </a>
          </li>
        </ul>
        <p class="copyright text-muted">Copyright &copy; Your Website {{ copyrightYears }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    copyrightYears: () => {
      let copyrightYears = '2019';
      const currentYear = new Date().getFullYear();
      if (currentYear !== 2019) {
        copyrightYears += ` - ${currentYear}`;
      }
      return copyrightYears;
    },
  },
};
</script>

<style scoped lang="scss">
  footer {
    padding: 50px 0 65px;
    .list-inline {
      margin: 0;
      padding: 0;
    }
    .copyright {
      font-size: 14px;
      margin-bottom: 0;
      text-align: center;
    }
  }
</style>
