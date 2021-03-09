<template>
  <MyHeader />
  <MyMenu />
</template>

<script>
import MyMenu from "./menu.vue";
import MyHeader from "./header.vue";
import { provide } from "vue";
import { useStore } from "vuex";

export default {
  components: { MyMenu, MyHeader },
  setup() {
    const store = useStore();
    const inf = store.state.information;
    provide("inf", inf);
  },
};
</script>
