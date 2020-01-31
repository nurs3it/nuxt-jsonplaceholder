<template>
  <div class="about-wrapper col-12">
    <h2>Пользователи:</h2>
    <div class="users">
      <about-user-block
        v-for="(user, index) in users"
        :key="user.id"
        v-if="isUsers"
        :user-data="user"
        :aboutUser="false"
      />
      <div v-if="!isUsers" class="col-12 spinner-block">
        <div class="spinner-border m-5" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../static/api/methods";
import AboutUserBlock from "../../components/aboutUserBlock";
export default {
  name: "index",
  components: { AboutUserBlock },
  data() {
    return {
      api,
      users: []
    };
  },
  computed: {
    isUsers() {
      return !!(this.users && this.users.length && this.users.length > 0);
    }
  },
  async created() {
    let response = await api.users.getUsers(10);
    if (response.status === 200) {
      this.users = response.data;
    } else {
      throw new Error("Ошибка с getUsers()");
    }
  }
};
</script>

<style scoped lang="scss">
@import "assets/styles/aboutStyle";
</style>
