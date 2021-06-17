<template>
  <div id="home">
    <div class="container">
      <div class="aside">
        <MyAside />
      </div>
      <div class="main">
        <MyMain />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
  import MyAside from "../common/aside/aside.vue";
  import MyMain from "../common/main/main.vue";
  import { onMounted } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore()
  onMounted(() => {
    store.dispatch('getInformation').catch((err) => {
      console.log(err)
    });
  })
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
