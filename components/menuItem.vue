<template>
 <li>
   <div class="menu-dropdown" v-if="item.submenu" v-clickaway="closeDrop">
     <nuxt-link :to="item.url" class="parent-link">{{ item.title }}</nuxt-link>
     <a href="#" class="parent-link-touch" @click.prevent="menuDrop=!menuDrop">{{ item.title }}</a>
     <div class="dropdown-menu-list" :class="{ 'open': menuDrop }">
        <ul>
           <li v-if="item.submenu" v-for="(submenuItem, i) in item.submenu" :key="i">
             <nuxt-link :to="submenuItem.url">{{ submenuItem.title }}</nuxt-link>
           </li>
        </ul>
     </div>
   </div>
   <nuxt-link :to="item.url" v-else>{{ item.title }}</nuxt-link>
 </li>
</template>

<script>
	import { directive as clickaway } from 'vue-clickaway';

	export default {
		props: {
			item: {
				type: Object
			}
		},
		data () {
			return {
				menuDrop: false
			}
		},
		directives: {
			clickaway
		},
        methods: {
			closeDrop(){
				this.menuDrop = false;
            }
        }
	}
</script>


