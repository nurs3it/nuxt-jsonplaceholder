<template>
  <div class="contacts">
    <yandex-map :zoom="zoom" :settings="settings" :coords="defaultPoint">
      <ymap-marker
        marker-id="1"
        :balloon-template="customBallonTamplete"
        :coords="megaPoint"
      />
      <ymap-marker
        marker-id="2"
        :coords="nurlyTauPoint"
        :icon="customIcon"
      />
    </yandex-map>
  </div>
</template>

<script>
import i from 'assets/img/location.svg'
export default {
  name: "contacts",
  data: () => ({
    defaultPoint: [43.247276, 76.943792],
    megaPoint: [43.264164, 76.92991],
    nurlyTauPoint: [43.230536, 76.945977],
    zoom: 14,
    settings: {
      apiKey: "263c095b-1e7d-44cf-8591-4f92e6924797",
      lang: "ru_RU",
      coordorder: "latlong",
      version: "2.1"
    },
    customIcon: {
      imageHref: i,
      layout: 'default#image'
    }
  }),
  computed: {
    customBallonTamplete() {
      return `
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">ТРЦ Mega Park</h5>
              <p class="card-text">MEGA — крупнейшая сеть торгово-развлекательных центров в Казахстане на протяжении 14 лет.</p>
            </div>
          </div>
      `;
    }
  }
};
</script>
<style scoped lang="scss">
@import "assets/styles/contactsStyle";
</style>
