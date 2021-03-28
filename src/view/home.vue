<template>
  <div id="home">
    <div class="container">
      <div class="aside">
        <MyAside />
      </div>
      <div class="main">
        <MyMain />
      </div>
    </div>
  </div>
</template>

<script setup>
import MyAside from "com/aside/aside.vue";
import MyMain from "com/main/main.vue";
import { provide } from "vue";
import { useStore } from "vuex";
const store = useStore();
const inf = store.state.information;
provide("inf", inf);
</script>

<style lang="scss" scoped>
#home {
  width: 75%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    .aside {
      width: 20%;
      height: 100%;
      background-color: #2c3e50;
    }
    .main {
      height: 100%;
      width: 80%;
      padding: 20px 20px;
      background-color: #dceefb;
    }
  }
}
</style>
