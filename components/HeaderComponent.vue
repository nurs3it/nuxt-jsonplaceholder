<template>
  <div class="header-wrapper header">
    <div class="media col-12 header-nav">
      <img src="~assets/img/icon.svg" alt="icon" />
      <div class="media-body">
        <div class="col-12 header-nav_title">
          <p>My accaunt</p>
        </div>
        <div class="header-nav_navbar col-12">
          <nav
            class="navbar navbar-expand-lg navbar-expand-sm navbar-light bg-light"
          >
            <nav class="navbar navbar-dark bg-light navbar-button d-sm-none">
              <button
                class="navbar-toggler"
                type="button"
              >
                <span class="navbar-toggler-icon" />
              </button>
            </nav>
            <div
              class="collapse navbar-collapse"
            >
              <ul class="navbar-nav">
                <li
                  class="nav-item"
                  v-for="(link, index) in links"
                  :key="index"
                  :class="index + 1 === links.length ? 'last-child' : ''"
                  v-if="link.to && link.title"
                >
                  <a
                    @click="$router.push(link.to)"
                    class="nav-link"
                    :class="link.to === $route.path ? 'active' : ''"
                    >{{ link.title }}</a
                  >
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      links: [
        // вывел пункты меню в массив, считаю им лучше быть динамичным
        {
          to: "/",
          title: "Главная"
        },
        {
          to: "/about",
          title: "О нас"
        },
        {
          to: "/contacts",
          title: "Контакты"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "assets/styles/headerStyle";
</style>
