<template>
  <paginate
    :page-count="10"
    :page-range="3"
    :margin-pages="3"
    :prev-text="'Prev'"
    :prev-link-class="'btn btn-primary'"
    :next-text="'Next'"
    :next-link-class="'btn btn-primary'"
    :container-class="'pagination'"
    :page-class="'m-2'"
    :page-link-class="'h5'">

  </paginate>
</template>

<script>
export default {
  name: 'Pagination',
};
</script>

<style scoped lang="sass">
.pagination
  display: flex
  justify-content: center
  align-items: center
  & .numbers
    margin: 0 5px!important
</style>
