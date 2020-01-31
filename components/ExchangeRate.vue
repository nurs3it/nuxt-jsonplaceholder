<template>
  <div class="col-12 exchange-rate">
    <!--TODO: блок скрывается если максимальный размер 768px-->
    <div class="card">
      <div class="col-12 exchange-rate_title">
        <p><b>Курс обмена валют:</b></p>
      </div>
      <div class="col-12 exchange-rate_main"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExchangeRate"
};
</script>

<style scoped lang="scss">
@import "assets/styles/exchangeRateStyle.scss";
</style>
