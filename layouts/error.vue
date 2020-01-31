<template>
  <div class="error-page">
    <div class="error-page_status">
      <p>Страница не найдена</p>
      <br />
      <button type="button" class="btn btn-primary m-1" @click="$router.go(-1)">
        Вернутся назад
      </button>
      <button type="button" class="btn btn-primary m-1" @click="$router.push('/')">
        Вернутся на главную
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "error"
};
</script>
<style scoped lang="scss">
@import "assets/styles/errorPageStyle";
</style>
