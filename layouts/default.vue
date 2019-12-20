<template>
  <div class="page-wrap" :class="{ 'main-page' : mainPage}">
    <page-header></page-header>
    <div class="page-content">
      <div class="container-fluid">
       <nuxt/>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageHeader from '~/components/header.vue'
  import PageFooter from '~/components/footer.vue'

  export default {
    name: 'default',
    components: {
      PageHeader,
      PageFooter
    },
    data () {
      return {
        loader: false,
        mainPage: true
      }
    },
    mounted () {},
    watch: {
      $route() {
        this.mainPage = (this.$route.path == '/') ? true : false;
      }
    },
    methods: {}
  }
</script>
