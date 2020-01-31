<template>
  <div class="card">
    <h5 class="card-header">
      {{ userData.name + " (" + userData.username + ")" }}
    </h5>
    <div class="card-body">
      <h5 class="card-title">{{ collectUserAddresses(userData.address) }}</h5>
      <h6 v-if="mode === 'moreAboutUser'" class="card-title">
        {{ collectUserCompany(userData.company) }}
      </h6>
      <p>
        <a target="_blank" v-if="aboutUser" class="card-text">{{
          userData.website
        }}</a>
      </p>
      <p>
        <a
          target="_blank"
          :href="'mailto:' + userData.email"
          class="card-text"
          v-if="aboutUser"
          >{{ userData.email }}</a
        >
      </p>
      <p>
        <a
          target="_blank"
          :href="'tel:' + userData.phone"
          class="card-text"
          v-if="aboutUser"
          >{{ userData.phone }}</a
        >
      </p>
      <a
        @click="$router.push({ name: 'about-id', params: { id: userData.id } })"
        class="btn btn-primary"
        v-if="!aboutUser"
        >Узнать подробнее</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutUserBlock",
  props: ["userData", "aboutUser"],
  methods: {
    collectUserAddresses(address) {
      // Связываю данные адреса и возвращаю одной строкой
      return address.city + ", " + address.street + ", " + address.suite;
    },
    collectUserCompany(company) {
      // Связываю данные о компании и возвращаю одной строкой
      return company.name + ", " + company.catchPhrase;
    }
  }
};
</script>

<style scoped lang="scss">
@import "assets/styles/aboutUserBlockStyle";
</style>
