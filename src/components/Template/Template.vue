<template>
  <div class="Template www">
    <div class="Template-title">
      <p>{{ title }}</p>
    </div>
    <div class="Template-content">
      <slot></slot>
    </div>
    <backhome />
  </div>
</template>

<script>
  import backhome from '../backhome/backhome.vue';
  export default {
    components: { backhome },
    props: {
      title: String,
    },
  };
</script>

<style lang="scss" scope>
  .Template {
    width: 95%;
    height: calc(100vh - 100px);
    margin: 0 auto;
    position: relative;
    padding: 40px 10px 20px;
    overflow: auto;
    .Template-title {
      font-size: 20px;
      font-weight: 700;
      height: 50px;
      line-height: 50px;
    }
  }
</style>
