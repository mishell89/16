<template>
  <div class="page-content-inner">
    <ul class="breadrumb">
      <li><nuxt-link to="/">Главная</nuxt-link></li>
      <li><nuxt-link to="/regionalnym-klientam">Региональным клиентам</nuxt-link></li>
    </ul>

    <div class="service-detail-top">
      <div class="service-detail-top-img" style="background-image: url('/images/service-detail-1.jpg');"></div>
      <div class="service-detail-top-content">
        <h1>Покупателям из регионов</h1>
        <div class="service-detail-top-text">Поможем выбрать квартиру, разместив в&nbsp;отеле на&nbsp;время оформления сделки</div>
      </div>
      <div class="service-detail-top-btns">
        <a href="#" class="btn btn-green btn-large">Онлайн-консультации</a>
        <a href="#" class="btn btn-green btn-large">Экскурсии по новостройкам</a>
      </div>
    </div>

    <div sticky-container>
      <div class="page-menu-container" v-sticky>
        <ul v-scroll-spy-active v-scroll-spy-link class="page-menu-list">
          <li><a href="#" @click.prevent="">Наши преимущества</a></li>
          <li><a href="#" @click.prevent="">Встреча клиентов</a></li>
          <li><a href="#" @click.prevent="">Проживание за счет компании</a></li>
          <li><a href="#" @click.prevent="">Трансфер по объектам</a></li>
          <li><a href="#" @click.prevent="">Демонстрация объектов</a></li>
          <li><a href="#" @click.prevent="">Плюсы для региональных покупателей</a></li>
        </ul>
      </div>

      <div class="sticky-content-sections" v-scroll-spy>

        <div class="page-section">
          <div class="page-section-header">
            <h2>Наши преимущества</h2>
            <div class="advantages-panels">

              <div class="advantages-panel">
                <div class="advantages-panel-content">
                  <div class="advantages-panel-icon">
                    <img src="/images/plus-icon-1.svg" alt="" />
                  </div>
                  <div class="advantages-panel-title">Комфорт и уровень сервиса</div>
                  <div class="advantages-panel-text">
                    <p>Встреча иногородних клиентов в&nbsp;аэропорту или на&nbsp;вокзале</p>
                    <p>Предоставление водителя на&nbsp;комфортном автомобиле для показа объектов</p>
                    <p>Бесплатное проживане в&nbsp;апарт-отеле со&nbsp;всеми удобствами</p>
                    <p>Приятные футбольные подарки с&nbsp;автографами</p>
                  </div>
                </div>
              </div>

              <div class="advantages-panel">
                <div class="advantages-panel-content">
                  <div class="advantages-panel-icon">
                    <img src="/images/plus-icon-2.svg" alt="" />
                  </div>
                  <div class="advantages-panel-title">Поддержка и&nbsp;безопасность</div>
                  <div class="advantages-panel-text">
                    <p>Полное юридическое сопровождение и&nbsp;безопасность при сделках</p>
                    <p>Бесплатные консультации и&nbsp;оценка недвижимости</p>
                    <p>Индивидуальный подход к&nbsp;каждому клиенту</p>
                    <p>Опытные специалисты по&nbsp;жилой, загородной, коммерческой и&nbsp;зарубежной недвижимости</p>
                  </div>
                </div>
              </div>

              <div class="advantages-panel">
                <div class="advantages-panel-content">
                  <div class="advantages-panel-icon">
                    <img src="/images/plus-icon-3.svg" alt="" />
                  </div>
                  <div class="advantages-panel-title">Выгодные сделки любой сложности</div>
                  <div class="advantages-panel-text">
                    <p>Срочный выкуп квартир вторичного рынка и&nbsp;аванс до&nbsp;500&nbsp;000 рублей</p>
                    <p>Выкуп квартир у&nbsp;застройщика с&nbsp;последующей переуступкой клиенту</p>
                    <p>Альтернативная продажа или &laquo;Flat Trade-in&raquo;</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="page-section light-blue-section">
          <div class="page-section-header">
            <h2>Встреча в аэропорту или на вокзале</h2>
            <div class="page-section-text">
              По&nbsp;приезду в&nbsp;малознакомый город приоритетом любого человека становится его личный комфорт и&nbsp;безопасность. Мы&nbsp;понимаем, что приобретение недвижимости&nbsp;&mdash; дело, требующее затрат не&nbsp;только сил и&nbsp;энергии, но&nbsp;и&nbsp;средств. С&nbsp;заботой о&nbsp;Вас мы&nbsp;создали уникальный бесплатный сервис встречи иногородних клиентов на&nbsp;автомобилях бизнес-класса компании с&nbsp;личным водителем-охранником. С&nbsp;нами вы&nbsp;можете быть уверенны в&nbsp;своей безопасности и&nbsp;комфортабельном размещении.
            </div>
            <div class="page-section-img">
              <img src="/images/service-detail-2.jpg" alt=""/>
            </div>
          </div>
        </div>

        <div class="page-section">
          <div class="page-section-header">
            <h2>Проживание за счет компании</h2>
          </div>
        </div>

        <div class="page-section light-blue-section">
          <div class="page-section-header">
            <h2>Трансфер по объектам</h2>
            <div class="page-section-text">
              Для людей, приехавших в&nbsp;Петербург первый раз, зачастую сложно сориентироваться во&nbsp;множестве его районов и&nbsp;улиц. С&nbsp;нами вы&nbsp;можете минимизировать время поиска подходящего варианта&nbsp;&mdash; персональный специалист не&nbsp;только сориентирует Вас на&nbsp;рынке недвижимости Петербурга, но&nbsp;и&nbsp;покажет все выбранные вами варианты. Ознакомившисьс районом, инфраструктурой и&nbsp;непосредственно с&nbsp;самим объектом, вы&nbsp;сможете лично убедиться в&nbsp;верности своего выбора.
            </div>
            <div class="page-section-img">
              <img src="/images/service-detail-4.jpg" alt=""/>
            </div>
          </div>
        </div>

        <div class="page-section">
          <div class="page-section-header">
            <h2>Демонстрация объектов</h2>
          </div>
        </div>

        <div class="page-section light-blue-section">
          <div class="page-section-header">
            <h2>Плюсы для региональных покупателей</h2>
          </div>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
	export default {
		components: {

		},
		data()
		{
			return {

			}
		}

	}
</script>
