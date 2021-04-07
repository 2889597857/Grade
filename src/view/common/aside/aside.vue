<template>
  <MyHeader />
  <MyMenu />
</template>

<script>
import MyMenu from "./menu.vue";
import MyHeader from "./header.vue";
export default {
  components: { MyMenu, MyHeader },
};
</script>
