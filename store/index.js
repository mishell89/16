export const state = () => ({
	menuOpened: false,
	menu: {
		top: [
			{
				url: '/catalog',
				title: 'Продажа',
				submenu: [
					{
						url: '/',
						title: 'Квартиры в новостройках'
					},
					{
						url: '/',
						title: 'Вторичная недвижимость'
					},
					{
						url: '/',
						title: 'Квартиры по переуступке'
					},
					{
						url: '/',
						title: 'Коммерческая недвижимость'
					},
					{
						url: '/',
						title: 'Загородная недвижимость'
					}
				]
			},
			{
				url: '/arenda',
				title: 'Аренда',
				submenu: [
					{
						url: '/',
						title: 'Аренда квартиры'
					},
					{
						url: '/',
						title: 'Аренда комнаты'
					},
					{
						url: '/',
						title: 'Аренда загородной недвижимости'
					},
					{
						url: '/',
						title: 'Аренда коммерческой недвижимости'
					}
				]
			},
			{
				url: '/services',
				title: 'Услуги',
				submenu: [
					{
						url: '/',
						title: 'Экскурсии'
					},
					{
						url: '/',
						title: 'Военная ипотека'
					},
					{
						url: '/',
						title: 'Калькулятор ипотеки'
					},
					{
						url: '/regionalnym-klientam',
						title: 'Региональным клиентам'
					}
				]
			},
			{
				url: '/o-kompanii',
				title: 'О компании',
				submenu: [
					{
						url: '/',
						title: 'Наша команда'
					},
					{
						url: '/',
						title: 'Преимущества компании'
					},
					{
						url: '/',
						title: 'Отзывы'
					},
					{
						url: '/',
						title: 'Наши партнеры'
					},
					{
						url: '/',
						title: 'Редакция'
					},
					{
						url: '/',
						title: 'Вакансии'
					}
				]
			},
			{
				url: '/analytics',
				title: 'Аналитика',
				submenu: [
					{
						url: '/',
						title: 'Новости'
					},
					{
						url: '/',
						title: 'Статьи'
					},
					{
						url: '/',
						title: 'Вебинары'
					},
					{
						url: '/',
						title: 'FAQ и помощь'
					},
					{
						url: '/',
						title: 'Районы'
					}
				]
			},
			{url: '/contacts', title: 'Контакты'},
		],
	}
});
