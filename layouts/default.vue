<template>
  <div>
    <div class="container">
      <div class="col-12">
        <header-component />
      </div>
      <div class="col-12">
        <transition mode="in-out" name="main-transition">
          <nuxt />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";
export default {
  components: { HeaderComponent },
  transition: { // не срабатывает транзишн TODO: РАЗОБРАТЬСЯ С ТРАНЗИШН
    name: 'main-transition',
    mode: 'in-out'
  }
};
</script>
