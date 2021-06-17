<template>
  <el-scrollbar>
    <div class="Template www">
      <div class="Template-title">
        <p>{{ title }}</p>
      </div>
      <div class="Template-content">
        <slot></slot>
      </div>
      <backhome />
      <el-backtop target=".www"></el-backtop>
    </div>
  </el-scrollbar>
</template>

<script>
  import { ref } from 'vue';
  import backhome from '../backhome/backhome.vue';
  export default {
    components: { backhome },
    props: {
      title: String,
    }
  }
</script>

<style lang="scss" scope>
  .Template {
    width: 95%;
    height: calc(100vh - 150px);
    margin: 0 auto;
    position: relative;
    padding: 20px 10px 20px;
    overflow: auto;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
    .Template-title {
      font-size: 20px;
      font-weight: 600;
      height: 50px;
      line-height: 50px;
    }
  }
</style>
