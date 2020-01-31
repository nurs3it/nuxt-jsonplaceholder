<template>
  <div class="col-12 user-info">
    <nav aria-label="breadcrumb" v-if="userData">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a @click="$router.push('/about')">О нас</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ userData.username }}
        </li>
      </ol>
    </nav>
    <div class="col-12 user-info" v-if="userData">
      <about-user-block :user-data="userData" :aboutUser="true" />
    </div>
    <div v-if="!userData" class="col-12 spinner-block">
      <div class="spinner-border m-5" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import api from "static/api/methods";
import AboutUserBlock from "../../components/aboutUserBlock";
export default {
  name: "_id",
  components: { AboutUserBlock },
  validate({ params }) {
    return !!params.id;
  },
  data() {
    return {
      api,
      userData: null
    };
  },
  async created() {
    let response = await api.users.getUserById(this.$route.params.id);
    if (response.status === 200) {
      this.userData = response.data;
    } else {
      throw new Error("Ошибка при получении пользователя по id");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "assets/styles/userInfoStyle";
</style>
