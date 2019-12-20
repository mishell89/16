<template>
  <div class="page-content-inner">
    <ul class="breadrumb">
      <li><nuxt-link to="/">Главная</nuxt-link></li>
      <li><nuxt-link to="/regionalnym-klientam">Региональным клиентам</nuxt-link></li>
    </ul>
    <div class="services-list">
      <div class="service-list-item" v-for="item in serviceList" :key="item.id">
        <nuxt-link :to="item.link">{{item.title}}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
	import AppLogo from '~/components/AppLogo.vue'

	export default {
		components: {
			AppLogo
		},
		data()
		{
			return {

			}
		}

	}
</script>
