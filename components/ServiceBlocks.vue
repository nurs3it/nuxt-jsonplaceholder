<template>
  <div class="col-12 service-block">
    <div class="card">
      <div class="service-block_image">
      <!--code-->
      </div>
      <div class="service-block_button">
        <button>{{button.title}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceBlocks",
  props: ['image', 'button']
};
</script>

<style scoped lang="scss">
@import "assets/styles/serviceBlocksStyle";
</style>
