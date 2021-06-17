<template>
  <div id="home">
    <div class="container">
      <div :class="['aside', { open: open }]">
        <MyAside />
      </div>
      <div class="main">
        <MyMain />
        <router-view />
      </div>
    </div>
    <Menu @click="openMenu" />
  </div>
</template>

<script>
  import MyAside from "../common/aside/aside.vue";
  import MyMain from "../common/main/main.vue";
  import Menu from './components/menu.vue';

  import { onMounted, ref } from 'vue';
  import { useStore } from 'vuex';
  export default {
    components: { MyAside, MyMain, Menu },

    setup () {
      const store = useStore()
      onMounted(() => {
        store.dispatch('getInformation').catch((err) => {
          console.log(err)
        });
      })
      let open = ref(false)
      const openMenu = () => {
        open.value = !open.value
        console.log(open.value)
      }

      return {
        openMenu, open
      }
    },
  }
</script>

<style lang="scss" scoped>
  #home {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      .aside {
        width: 15%;
        height: 100%;
        background-color: #2c3e50;
        @media screen and (max-width: 1000px) {
          position: absolute;
          left: -60%;
          width: 200px;
          z-index: 100;
          font-size: 12px;
          transition: all 0.5s;
        }
      }
      .main {
        height: 100%;
        width: 85%;
        padding: 20px 0px;
        background-color: #dceefb;
        @media screen and (max-width: 1000px) {
          width: 100%;
        }
      }
    }
  }
  .open {
    left: 0 !important;
  }
</style>
