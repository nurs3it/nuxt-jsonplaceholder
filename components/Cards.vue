<template>
  <div class="col-12 col-lg-6 col-md-12 col-sm-12 card-wrapper">
    <div class="card">
      <div class="col-12 card-wrapper_title">
        <p>{{ cardOptions.title }}</p>
      </div>
      <div class="col-12 card-wrapper_main"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cards", // Вот так странно у меня называется большой блок сервиса на главной странице
  props: ["cardOptions"]
};
</script>

<style scoped lang="scss">
@import "assets/styles/cardsStyle.scss";
</style>
