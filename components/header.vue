<template>
  <header class="page-header">
    <div class="container-fluid">
      <div class="page-header-content">
        <nuxt-link to="/" class="logo"><img src="/images/m-16-logo.svg" alt="logo" /></nuxt-link>
        <div class="header-menu">
          <div class="header-menu-phone">
            <a href="tel:+78005505516">8-800-550-55-16</a>
          </div>
          <ul>
              <menu-item v-for="(item, i) in $store.getters.getTopMenu" :item="item" :key="i"></menu-item>
          </ul>
        </div>
        <div class="header-right">
          <a href="#" class="btn btn-small btn-white-border header-callback-btn">
            <span class="phone-text">Заказать звонок</span>
            <span class="icon-phone"></span>
          </a>
          <a href="tel:+78005505516" class="header-phone">8-800-550-55-16</a>
          <div class="header-ctrls">
            <a href="#" class=""><span class="icon-user"></span></a>
            <a href="#" class=""><span class="icon-search"></span></a>
          </div>
          <button class="menu-toggle" @click.prevent="toggleBodyClass"><span></span></button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

	import menuItem from '~/components/menuItem.vue'
	let appBody = null;

	export default {
		components: {
			menuItem
		},
		data () {
			return {
				menuOpened: false
			}
		},
		methods: {
			toggleBodyClass: function(){
				if (this.menuOpened){
					this.menuOpened = false;
					appBody.classList.remove('menu-opened');
                }
                else{
					this.menuOpened = true;
					appBody.classList.toggle('menu-opened');
                }
            }
		},
		mounted () {
			appBody = document.getElementsByTagName('body')[0];
		},
		watch: {
			$route() {
				this.menuOpened = false;
				appBody.classList.remove('menu-opened');
			}
		},
	}

</script>

