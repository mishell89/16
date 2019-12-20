<template>
  <div class="page-wrap error-page-wrap">
    <nuxt/>
  </div>
</template>

<script>
  export default {
    name: 'err',
    data () {
      return {
        loader: false,
        mainPage: true
      }
    },
  }
</script>
