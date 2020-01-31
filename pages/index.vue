<template>
  <div class="home">
    <div class="col-12 col-sm-12 col-md-9 col-lg-9 home_main reset-padding">
      <cards v-for="(card, index) in cards" :key="index" :cardOptions="card" />
    </div>
    <div class="col-12 col-sm-12 col-md-3 col-lg-3 home_right-block reset-padding">
      <exchange-rate />
      <service-blocks
        v-for="(service, index) in rightBlockServices"
        :key="service"
        :image="service.image"
        :button="service.button"
      />
    </div>
  </div>
</template>

<script>
import Cards from "../components/Cards";
import ExchangeRate from "../components/ExchangeRate";
import ServiceBlocks from "../components/ServiceBlocks";
import cards from "../static/mainPageCardDatas";
import services from "../static/rightBlockServicesDatas";

export default {
  components: { ServiceBlocks, ExchangeRate, Cards },
  data() {
    return {
      rightBlockServices: services, // Подробнее смотреть в комментах файла
      cards: cards // Подробнее смотреть в комментах файла
    };
  }
};
</script>

<style scoped lang="scss">
@import "assets/styles/homeStyle.scss";
</style>
