<template>
  <div class="page-content-inner">
    <ul class="breadrumb">
      <li><nuxt-link to="/">Главная</nuxt-link></li>
      <li><nuxt-link to="/services">Услуги</nuxt-link></li>
    </ul>
    <div class="services-list">
      <div class="service-list-col" v-for="item in serviceList" :key="item.id">
        <nuxt-link :to="item.link" class="service-list-item">
          <div class="service-list-item-img" :style="{backgroundImage: 'url('+item.img+')'}"></div>
          <div class="services-list-item-caption">
            <div class="service-list-item-title norms">{{item.title}}</div>
            <div class="service-list-item-text">{{item.text}}</div>
          </div>
          <div class="services-list-item-btn-container">
            <div class="services-list-item-btn">Подробнее</div>
          </div>
        </nuxt-link>
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
				serviceList: [
					{
						id: '1',
						title: 'Региональным клиентам',
						text: 'Поможем выбрать квартиру, разместив в отеле на время оформления сделки',
						link: '/regionalnym-klientam',
						img: '/images/service-img-1.jpg',
					},
					{
						id: '2',
						title: 'Военная ипотека',
						text: 'Специальные цены и условия приобретения недвижимости для военнослужащих',
						link: '/military',
						img: '/images/service-img-2.jpg',
					},
					{
						id: '3',
						title: 'Экскурсии',
						text: 'Индивидуальные и групповые экскурсии по новостройкам',
						link: '/excursion',
						img: '/images/service-img-3.jpg',
					},
					{
						id: '4',
						title: 'Продажа вашей квартиры',
						text: 'Продадим вашу квартиру на максимально выгодных для вас условиях',
						link: '',
						img: '/images/service-img-4.jpg',
					},
					{
						id: '5',
						title: 'Дизайн вашей квартиры',
						text: 'Поможем визуализировать образ квартиры вашей мечты',
						link: '',
						img: '/images/service-img-5.jpg',
					},
					{
						id: '6',
						title: 'Типовая страница услуги',
						text: 'Описание типовой услуги',
						link: '',
						img: '/images/service-img-6.jpg',
					},
				]
			}
		}

	}
</script>
