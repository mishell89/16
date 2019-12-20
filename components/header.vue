<template>
  <header class="page-header">
    <div class="container-fluid">
      <div class="page-header-content">
        <nuxt-link to="/" class="logo"><img src="/images/m-16-logo.svg" alt="logo" /></nuxt-link>
        <div class="header-menu">
          <ul>
            <li v-for="item in $store.getters.getTopMenu">
              <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="header-right">
          <a href="#" class="btn btn-small btn-white-border">Заказать звонок</a>
          <a href="tel:+78005505516" class="header-phone">8-800-550-55-16</a>
          <div class="header-ctrls">
            <a href="#" class=""><span class="icon-user"></span></a>
            <a href="#" class=""><span class="icon-search"></span></a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>


