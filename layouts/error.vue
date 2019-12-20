<template>
  <div class="page-content">
    <div class="container">
      <div class="error-page-content">
        <div class="go-back-link norms"><nuxt-link to="/">Вернуться назад</nuxt-link></div>
        <div class="error-page-text">
          <h1>Закрыто</h1>
          <div class="error-page-caption">Мы с удовольствием вам поможем!</div>
          <ul class="error-page-links">
            <li><a href="#">Каталог недвижимости</a></li>
            <li><a href="#">Интересные предложения</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Отзывы</a></li>
          </ul>
        </div>
        <div class="error-code">
          Код ошибки:
          <span v-if="error.statusCode === 404"> 404</span>
          <span v-else>An error occurred</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'err'
  }
</script>
